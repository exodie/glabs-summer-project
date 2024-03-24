package com.glabs.entities.user.controllers;

import com.glabs.entities.user.services.UserService;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glabs.payload.request.LoginRequest;
import com.glabs.payload.request.SignUpRequest;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	private final UserService userService;

	@Autowired
	public AuthController(UserService userService){
		this.userService = userService;
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		return userService.signIn(loginRequest);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		return userService.createUser(signUpRequest);
	}
}
