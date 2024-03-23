package com.glabs.models;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users {

    private String firstName;
    private String lastName;

    private String email;
    private String username;
    private String password;
    private String phoneNumber;

    private List<String> roles;

    // TODO: Type of "String" - временный, после необходимо связать с кластером покупок пользователя (когда тот будет создан)
    private List<String> shops;

    private int scores;
}
