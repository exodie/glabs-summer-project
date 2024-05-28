package com.glabs.entities.amplifiers.controllers;

import com.glabs.entities.amplifiers.services.AmplifierService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class AmplifierController {

    private final AmplifierService amplifierService;

    @GetMapping("/api/products/amps")
    private ProductResponse getAllAmplifier(){
        return amplifierService.getAllAmp();
    }

}
