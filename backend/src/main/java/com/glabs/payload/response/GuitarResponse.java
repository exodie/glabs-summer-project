package com.glabs.payload.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Map;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
public class GuitarResponse {
    @Builder.Default
    private final String category = "guitars";
    private final Set<SubCategoriesResponse> subCategories;
    private final Set<String> brands;
    private final Map<String, Object> products;
}
