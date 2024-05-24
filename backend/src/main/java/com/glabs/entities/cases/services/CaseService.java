package com.glabs.entities.cases.services;

import com.glabs.commonService.ProductService;
import com.glabs.payload.response.ProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CaseService {

    private final ProductService productService;

    public ProductResponse getAllCase() {
        productService.setCollectionEnd("Case");
        return ProductResponse.builder()
                .category("case")
                .subCategories(productService.getSubcategories())
                .brands(productService.getBrands())
                .products(productService.getProductMap()).build();
    }
}
