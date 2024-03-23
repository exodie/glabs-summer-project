package com.glabs.entities.user.controllers;

import com.glabs.models.Users;
import com.glabs.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/")
    public void createUser(@RequestBody Users user) {
        userRepository.save(user);
    }
}
