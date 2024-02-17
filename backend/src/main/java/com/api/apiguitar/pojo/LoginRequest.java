package com.api.apiguitar.pojo;

import lombok.Data;

@Data
public class LoginRequest {

    private String phone;
    private String password;
}