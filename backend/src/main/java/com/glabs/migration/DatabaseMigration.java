package com.glabs.migration;

import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DatabaseMigration {

    private static final Logger LOGGER = LoggerFactory.getLogger(DatabaseMigration.class);

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Bean
    public CommandLineRunner migrationRunner() {
        return args -> {
            String databaseName = mongoUri.substring(mongoUri.lastIndexOf("/") + 1);

            MongoDatabase database = MongoClients.create().getDatabase(databaseName);

            database.createCollection("roles");

            MongoCollection<Document> rolesCollection = database.getCollection("roles");

            if (rolesCollection.countDocuments() == 0) {
                rolesCollection.insertMany(
                        List.of(
                                new Document("name", "ROLE_USER"),
                                new Document("name", "ROLE_MODERATOR"),
                                new Document("name", "ROLE_ADMIN")
                        )
                );

                LOGGER.info("Миграция успешно выполнена.");
            } else {
                LOGGER.info("Роли уже существуют в базе данных.");
            }
        };
    }
}
