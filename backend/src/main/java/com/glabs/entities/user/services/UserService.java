package com.glabs.entities.user.services;


import com.glabs.models.ERole;
import com.glabs.models.Role;
import com.glabs.models.User;
import com.glabs.payload.request.LoginRequest;
import com.glabs.payload.request.SignUpRequest;
import com.glabs.payload.response.JwtResponse;
import com.glabs.payload.response.MessageResponse;
import com.glabs.repositories.RoleRepository;
import com.glabs.repositories.UserRepository;
import com.glabs.security.jwt.JwtUtils;
import com.glabs.security.services.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder encoder, RoleRepository roleRepository,
                       AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    public ResponseEntity<?> createUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = new User(
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getFirstName() != null ? signUpRequest.getFirstName() : null,
                signUpRequest.getLastName() != null ? signUpRequest.getLastName() : null,
                signUpRequest.getPhoneNumber() != null ? signUpRequest.getPhoneNumber() : null);

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        System.out.println(user.getFirstName() + " " + user.getLastName() + " " + user.getPhoneNumber());

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    public ResponseEntity<?> signIn(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

}
