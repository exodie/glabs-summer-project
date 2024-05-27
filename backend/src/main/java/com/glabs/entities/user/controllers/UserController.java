package com.glabs.entities.user.controllers;

import com.glabs.entities.user.services.UserService;
import com.glabs.models.User;
import com.glabs.payload.request.UpdateUserRequest;
import com.glabs.entities.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @ModelAttribute("user")
    public User getUser(@RequestParam("id") String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No such user."));
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAll() {
        return userService.getAll();
    }

    @GetMapping(params = "id")
    public ResponseEntity<?> getById(@RequestParam String id, @ModelAttribute("user") User user) {
        return ResponseEntity.ok().body(user);
    }

    @PatchMapping()
    public ResponseEntity<?> updateUser(@RequestParam String id, @RequestBody UpdateUserRequest updateUserRequest) {
        return userService.updateUser(id, updateUserRequest);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteUser(@RequestParam String id) {
        return userService.deleteUser(id);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<?> handleNoSuchElementException(NoSuchElementException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, exception.getMessage()));
    }
}
