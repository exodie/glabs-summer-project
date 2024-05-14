package com.glabs.entities.amplifier.services;

import com.glabs.commonService.MongoService;
import com.glabs.payload.response.AmpResponse;
import com.glabs.payload.response.SubCategoriesResponse;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AmplifierService {

    private final MongoService mongoService;

    public AmpResponse getAllAmp() {
        Set<SubCategoriesResponse> subCategories = new HashSet<>();
        Map<String, Object> productDataMap = new HashMap<>();
        Query query = new Query();
        query.fields().exclude("_id");


        Set<String> filteredCollection = mongoService.getAllCollectionName().stream()
                .filter(collection -> collection.contains("Amp"))
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
        return AmpResponse.builder()
                .subCategories(subCategories)
                .brands(brands)
                .products(productDataMap).build();
    }

}
