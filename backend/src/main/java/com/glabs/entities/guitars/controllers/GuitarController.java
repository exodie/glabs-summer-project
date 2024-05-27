package com.glabs.entities.guitars.controllers;

import com.glabs.entities.guitars.services.GuitarService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class GuitarController {

    private final GuitarService guitarService;
    @GetMapping("/api/products/guitars")
    private ProductResponse getAllGuitar(){
        return guitarService.getAllGuitar();
    }
}

