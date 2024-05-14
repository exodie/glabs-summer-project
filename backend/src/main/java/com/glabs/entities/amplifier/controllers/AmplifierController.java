package com.glabs.entities.amplifier.controllers;

import com.glabs.commonService.MongoService;
import com.glabs.entities.amplifier.services.AmplifierService;
import com.glabs.payload.response.AmpResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class AmplifierController {

    private final AmplifierService amplifierService;

    @GetMapping("/api/products/amp")
    private AmpResponse getAllAmplifier(){
        return amplifierService.getAllAmp();
    }

}
