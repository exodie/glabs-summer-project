package com.glabs.entities.user.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ControllerAdvice
public class BadRequestControllerAdvice {

    @ExceptionHandler(BindException.class)
    public ResponseEntity<?> handleBindException(BindException exception){
        List<Map<String, String>> errors = exception.getAllErrors().stream()
                .map(error -> {
                    Map<String, String> errorDetails = new HashMap<>();
                    if (error instanceof FieldError) {
                        FieldError fieldError = (FieldError) error;
                        errorDetails.put("field", fieldError.getField());
                    }
                    errorDetails.put("defaultMessage", error.getDefaultMessage());
                    return errorDetails;
                })
                .collect(Collectors.toList());
        return ResponseEntity.badRequest().body(errors);
    }
}
