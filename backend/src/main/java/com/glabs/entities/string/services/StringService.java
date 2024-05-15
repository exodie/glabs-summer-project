package com.glabs.entities.string.services;

import com.glabs.commonService.MongoService;
import com.glabs.payload.response.StringResponse;
import com.glabs.payload.response.SubCategoriesResponse;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class StringService {

    private final MongoService mongoService;

    public StringResponse getAllStrings(){
        Set<SubCategoriesResponse> subCategories = new HashSet<>();
        Map<String, Object> productDataMap = new HashMap<>();
        Query query = new Query();
        query.fields().exclude("_id");

        Set<String> filteredCollection = mongoService.getAllCollectionName().stream()
                .filter(collection -> collection.contains("String"))
                .collect(Collectors.toSet());

        for (String collectionName : filteredCollection) {
            SubCategoriesResponse subCategoriesResponse = new SubCategoriesResponse(collectionName, mongoService.getCountOfDocumentsInCollection(collectionName));
            subCategories.add(subCategoriesResponse);
        }

        Set<String> brands = new HashSet<>();
        for (String collectionName : filteredCollection) {
            List<Document> documents = mongoService.getAllDocumentInCollection(collectionName);
            for (Document document : documents) {
                Object characteristics = document.get("characteristics");
                for (Object characteristic : (Iterable<?>) characteristics) {
                    String characteristicString = (String) characteristic;
                    if (characteristicString.startsWith("Производитель:")) {
                        String brand = characteristicString.substring("Производитель:".length()).trim();
                        brands.add(brand);
                    }
                }
            }
            productDataMap.put(collectionName, mongoService.getDocumentsInCollection(collectionName, query));
        }
        return StringResponse.builder()
                .subCategories(subCategories)
                .brands(brands)
                .products(productDataMap).build();

    }

}
