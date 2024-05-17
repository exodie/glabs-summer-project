package com.glabs.entities.string.controllers;

import com.glabs.entities.string.services.StringService;
import com.glabs.payload.response.StringResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StringController {
    private final StringService stringService;

    @GetMapping("/api/products/strings")
    private StringResponse getAllString(){
        return stringService.getAllStrings();
    }

}
