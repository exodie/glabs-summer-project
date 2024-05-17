package com.glabs.entities.guitar.controllers;

import com.glabs.entities.guitar.services.GuitarService;
import com.glabs.payload.response.GuitarResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class GuitarController {

    private final GuitarService guitarService;
    @GetMapping("/api/products/guitars")
    private GuitarResponse getAllGuitar(){
        return guitarService.getAllGuitar();
    }
}

