package com.glabs.migration;

import com.mongodb.client.*;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DatabaseMigration {

    private static final Logger LOGGER = LoggerFactory.getLogger(DatabaseMigration.class);

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;
    @Value("${spring.data.mongodb.database}")
    private String databaseName;

    @Bean
    public CommandLineRunner migrationRunner() {
        return args -> {
            try (MongoClient mongoClient = MongoClients.create(mongoUri)) {
                MongoDatabase database = mongoClient.getDatabase(databaseName);
                MongoIterable<String> collectionNames = database.listCollectionNames();

                List<String> collectionNamesList = new ArrayList<>();
                for (String collectionName : collectionNames) {
                    collectionNamesList.add(collectionName);
                }

                if (collectionNamesList.contains("roles")) {
                    LOGGER.warn("Роли уже существуют");
                } else {
                    database.createCollection("roles");
                    MongoCollection<Document> rolesCollection = database.getCollection("roles");
                    rolesCollection.insertMany(
                            List.of(
                                    new Document("name", "ROLE_USER"),
                                    new Document("name", "ROLE_MODERATOR"),
                                    new Document("name", "ROLE_ADMIN")
                            )
                    );
                    LOGGER.info("Роли созданы");
                }
            }
        };
    }
}
