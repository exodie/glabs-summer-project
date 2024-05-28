package com.glabs.entities.pedals.services;

import com.glabs.commonService.ProductService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class PedalService {

    private final ProductService productService;

    public ProductResponse getAllPedals() {
        productService.setCollectionEnd("Pedal");
        return ProductResponse.builder()
                .category("pedal")
                .subCategories(productService.getSubcategories())
                .brands(productService.getBrands())
                .products(productService.getProductMap()).build();
    }
}