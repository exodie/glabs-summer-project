package com.glabs.entities.pedals.controllers;

import com.glabs.entities.pedals.services.PedalService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PedalController {

    private final PedalService pedalService;

    @GetMapping("/api/products/pedals")
    private ProductResponse getAllPedals(){
        return  pedalService.getAllPedals();
    }

}
