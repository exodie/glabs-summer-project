package com.glabs.entities.cases.controllers;

import com.glabs.entities.cases.services.CaseService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CaseController {

    private final CaseService caseService;

    @GetMapping("/api/products/cases")
    private ProductResponse getAllCases(){
        return caseService.getAllCase();
    }
}
