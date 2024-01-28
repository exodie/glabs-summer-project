package com.api.apiguitar.controlles;

import com.api.apiguitar.configs.JWT.JwtUtils;
import com.api.apiguitar.data.ERole;
import com.api.apiguitar.data.Role;
import com.api.apiguitar.data.User;
import com.api.apiguitar.detailsImpl.UserDetailsImpl;
import com.api.apiguitar.pojo.JwtResponse;
import com.api.apiguitar.pojo.LoginRequest;
import com.api.apiguitar.pojo.MessageResponse;
import com.api.apiguitar.pojo.SignupRequest;
import com.api.apiguitar.repository.RoleRepository;
import com.api.apiguitar.repository.UserRepository;
import com.api.apiguitar.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authUser(@RequestBody LoginRequest loginRequest) {
        return authService.signIn(loginRequest);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        return authService.signUp(signupRequest);
    }
}