package com.glabs.entities.strings.services;

import com.glabs.commonService.ProductService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StringService {

    private final ProductService productService;

    public ProductResponse getAllStrings(){
        productService.setCollectionEnd("String");
        return ProductResponse.builder()
                .category("string")
                .subCategories(productService.getSubcategories())
                .brands(productService.getBrands())
                .products(productService.getProductMap()).build();

    }

}
