package com.glabs.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.glabs.payload.request.SignUpRequest;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String id;

    @NotBlank
    private String username;

    @NotBlank
    @Email
    private String email;

    private String password;

    @NotBlank
    @DBRef
    private Set<Role> roles = new HashSet<>();

    @Field(write = Field.Write.ALWAYS)
    private String firstName;
    @Field(write = Field.Write.ALWAYS)
    private String lastName;
    @Field(write = Field.Write.ALWAYS)
    private String phoneNumber;
    @Field(write = Field.Write.ALWAYS)
    private List<String> shops;
    @Field(write = Field.Write.ALWAYS)
    private int scores;

    public User() {
    }

    public User(String username, String email, String password, String firstName, String lastName, String phoneNumber) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.scores = 0;
        this.shops = null;
    }
}
