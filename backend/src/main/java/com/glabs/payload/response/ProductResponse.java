package com.glabs.payload.response;

import lombok.Builder;

import java.util.Map;
import java.util.Set;

@Builder
public record ProductResponse(String category, Set<SubCategoriesResponse> subCategories, Set<String> brands,
                              Map<String, Object> products) {
}
