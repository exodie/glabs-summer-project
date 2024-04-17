package com.glabs.scripts.java;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

class JsonToMongo{
    public static void main(String[] args) throws IOException {
        String jsonFilePath = "src/main/java/com/glabs/scripts/jsons/usedElectroGuitar.json";
        InputStream inputStream = JsonToMongo.class.getResourceAsStream(jsonFilePath);
        String connectionString = "mongodb://localhost:27017"; // Строка подключения к MongoDB
        String databaseName = "glabs"; // Имя вашей базы данных
        String collectionName = "usedElectroGuitar"; // Имя вашей коллекции

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            File jsonFile = new File(jsonFilePath);
            GuitarsWrapper guitarsWrapper = objectMapper.readValue(inputStream, GuitarsWrapper.class);

            List<UsedElectroGuitar> guitars = guitarsWrapper.getUsedElectroGuitar();

            MongoClient mongoClient = MongoClients.create(connectionString);
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            for (UsedElectroGuitar guitar : guitars) {
                System.out.println(guitar.getName());
            }

            for (UsedElectroGuitar guitar : guitars) {
                Document guitarDocument = new Document();
                guitarDocument.put("name", guitar.getName());
                guitarDocument.put("price", guitar.getPrice());
                guitarDocument.put("type", guitar.getType());
                guitarDocument.put("characteristics", guitar.getCharacteristics());

                collection.insertOne(guitarDocument);
            }

            System.out.println("Data inserted successfully.");
            mongoClient.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}