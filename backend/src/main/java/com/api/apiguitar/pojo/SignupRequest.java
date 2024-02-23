package com.api.apiguitar.pojo;

import lombok.Data;

import java.util.Set;

@Data
public class SignupRequest {

    private String firstName;
    private String lastName;
    private String phone;
    private Set<String> roles;
    private String password;
}
