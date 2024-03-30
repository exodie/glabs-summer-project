package com.glabs.payload.request;

import lombok.Data;

import java.util.List;

@Data
public class UpdateUserRequest {

    private String id;
    private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<String> shops;
    private int scores;
}