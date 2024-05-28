package com.glabs.scripts;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.apache.commons.io.FilenameUtils;
import org.bson.Document;

import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class JsonToMongo {

    public static void main(String[] args) throws IOException {

        String jsonFolderPath = "PASTE_YOUR_FOLDER_WITH_JSONS";

        File folder = new File(jsonFolderPath);

        if (!folder.exists() || !folder.isDirectory()) {
            System.out.println("Folder not found.");
            return;
        }
        String connectionString = "DB_URL";

        String databaseName = "DB_NAME";

        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase database = mongoClient.getDatabase(databaseName);

            ObjectMapper objectMapper = new ObjectMapper();

            for (File jsonFile : folder.listFiles((dir, name) -> name.toLowerCase().endsWith(".json"))) {
                String collectionName = FilenameUtils.removeExtension(jsonFile.getName());
                MongoCollection<Document> collection = database.getCollection(collectionName);

                JsonNode rootNode = objectMapper.readTree(jsonFile);

                JsonNode guitarsNode = rootNode.get(collectionName);
                if (guitarsNode != null && guitarsNode.isArray()) {
                    System.out.println("Guitars from " + jsonFile.getName() + ":");
                    int totalGuitars = guitarsNode.size();
                    System.out.println("Total guitars: " + totalGuitars);

                    long existingRecords = collection.countDocuments();
                    System.out.println("Existing records in the collection " + collectionName + ": " + existingRecords);

                    Set<String> existingGuitarCodes = new HashSet<>();
                    for (Document document : collection.find()) {
                        List<String> characteristics = (List<String>) document.get("characteristics");
                        if (characteristics != null) {
                            for (String characteristic : characteristics) {
                                if (characteristic.startsWith("Код товара:")) {
                                    String code = characteristic.split(":")[1].trim();
                                    existingGuitarCodes.add(code);
                                    break;
                                }
                            }
                        }
                    }

                    int matchingGuitarsCount = 0;
                    for (JsonNode guitarNode : guitarsNode) {
                        String guitarCode = null;
                        JsonNode characteristicsArrayNode = guitarNode.get("characteristics");
                        for (JsonNode characteristicNode : characteristicsArrayNode) {
                            String characteristic = characteristicNode.asText();
                            if (characteristic.startsWith("Код товара:")) {
                                guitarCode = characteristic.split(":")[1].trim();
                                break;
                            }
                        }
                        if (guitarCode != null && existingGuitarCodes.contains(guitarCode)) {
                            matchingGuitarsCount++;
                        }
                    }
                    System.out.println("Matching guitars with existing records: " + matchingGuitarsCount);

                    Scanner scanner = new Scanner(System.in);
                    System.out.println("Do you want to load these guitars into the database? (y/n)");
                    String userInput = scanner.nextLine();

                    if ("y".equalsIgnoreCase(userInput)) {
                        int newRecordsCount = 0;
                        int existingRecordsCount = 0;

                        for (JsonNode guitarNode : guitarsNode) {
                            String guitarCode = null;
                            JsonNode characteristicsArrayNode = guitarNode.get("characteristics");
                            for (JsonNode characteristicNode : characteristicsArrayNode) {
                                String characteristic = characteristicNode.asText();
                                if (characteristic.startsWith("Код товара:")) {
                                    guitarCode = characteristic.split(":")[1].trim();
                                    break;
                                }
                            }
                            if (guitarCode != null && !existingGuitarCodes.contains(guitarCode)) {
                                Document guitarDocument = Document.parse(guitarNode.toString());
                                collection.insertOne(guitarDocument);
                                newRecordsCount++;
                            } else {
                                existingRecordsCount++;
                            }
                        }
                        System.out.println("Data inserted successfully.");
                        System.out.println("New records inserted: " + newRecordsCount);
                        System.out.println("Skipped existing records: " + existingRecordsCount);
                    } else if ("n".equalsIgnoreCase(userInput)) {
                        System.out.println("Data not loaded.");
                    } else {
                        System.out.println("Invalid input. Data not loaded.");
                    }
                }
            }
        }
    }
}
