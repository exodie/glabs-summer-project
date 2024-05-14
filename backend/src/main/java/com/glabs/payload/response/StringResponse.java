package com.glabs.payload.response;

import lombok.Builder;
import lombok.Data;

import java.util.Map;
import java.util.Set;

@Data
@Builder
public class StringResponse {
    @Builder.Default
    private final String category = "strings";
    private final Set<SubCategoriesResponse> subCategories;
    private final Set<String> brands;
    private final Map<String, Object> products;
}
