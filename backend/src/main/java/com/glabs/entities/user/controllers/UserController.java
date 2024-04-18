package com.glabs.entities.user.controllers;

import com.glabs.entities.user.services.UserService;
import com.glabs.models.User;
import com.glabs.payload.request.DeleteRequest;
import com.glabs.payload.request.UpdateUserRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @GetMapping()
    public ResponseEntity<List<User>> getAll() {
        return userService.getAll();
    }

    @GetMapping(params = "id")
    public ResponseEntity<?> getById(@RequestParam String id) {
        return userService.getUserById(id);
    }

    @PatchMapping()
    public ResponseEntity<?> updateUser(@RequestParam String id, @RequestBody UpdateUserRequest updateUserRequest) {
        return userService.updateUser(id, updateUserRequest);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteUser(@RequestParam String id) {
        return userService.deleteUser(id);
    }

}
