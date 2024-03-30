package com.glabs.entities.user.controllers;

import com.glabs.entities.user.services.UserService;
import com.glabs.models.User;
import com.glabs.payload.request.DeleteRequest;
import com.glabs.payload.request.UpdateUserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PatchMapping
    public ResponseEntity<User> updateUser(@RequestBody UpdateUserRequest updateUserRequest) {
        return userService.updateUser(updateUserRequest);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(@RequestBody DeleteRequest deleteRequest) {
        return userService.deleteUser(deleteRequest.getId());
    }

}
