package com.glabs.commonService;

import com.glabs.payload.response.SubCategoriesResponse;
import jakarta.annotation.PostConstruct;
import lombok.Setter;
import org.bson.Document;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Setter
    private String collectionEnd;
    private final MongoService mongoService;
    private Set<String> filteredCollection;

    public ProductService(MongoService mongoService){
        this.mongoService = mongoService;
    }

    @PostConstruct
    public void init() {
        if (collectionEnd == null){
            return;
        }
        this.filteredCollection = mongoService.getAllCollectionName().stream()
                .filter(collection -> collection.contains(collectionEnd))
                .collect(Collectors.toSet());
    }

    private void updateFilteredCollection(){
        this.filteredCollection = mongoService.getAllCollectionName().stream()
                .filter(collection -> collection.contains(collectionEnd))
                .collect(Collectors.toSet());
    }

    public Set<SubCategoriesResponse> getSubcategories(){
        if (filteredCollection == null){
            updateFilteredCollection();
            return getSubcategories();
        }
        Set<SubCategoriesResponse> subCategories = new HashSet<>();
        for (String collectionName : filteredCollection) {
            SubCategoriesResponse subCategoriesResponse = new SubCategoriesResponse(collectionName, mongoService.getCountOfDocumentsInCollection(collectionName));
            subCategories.add(subCategoriesResponse);
        }
        return subCategories;
    }

    public Set<String> getBrands(){
        if (filteredCollection == null){
            updateFilteredCollection();
            return getBrands();
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
        }
        return brands;
    }

    public Map<String, Object> getProductMap(){
        if (filteredCollection == null){
            updateFilteredCollection();
            return getProductMap();
        }
        Query query = new Query();
        query.fields().exclude("_id");
        Map<String, Object> productDataMap = new HashMap<>();
        for (String collectionName : filteredCollection) {
            productDataMap.put(collectionName, mongoService.getDocumentsInCollection(collectionName, query));
        }
        return productDataMap;
    }
}
