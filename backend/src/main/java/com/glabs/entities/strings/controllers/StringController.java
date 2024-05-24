package com.glabs.entities.strings.controllers;

import com.glabs.entities.strings.services.StringService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StringController {
    private final StringService stringService;

    @GetMapping("/api/products/string")
    private ProductResponse getAllString(){
        return stringService.getAllStrings();
    }

}
