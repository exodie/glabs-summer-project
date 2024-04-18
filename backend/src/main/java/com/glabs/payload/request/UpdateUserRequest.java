package com.glabs.payload.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.glabs.payload.response.MessageResponse;
import lombok.Data;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

@Data
public class UpdateUserRequest {

    private String username;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<String> shops;
    private int scores;

    private Map<String, Object> additionalProperties = new HashMap<>();

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        additionalProperties.put(name, value);
    }

    public ResponseEntity<?> validateFields() {
        if (!additionalProperties.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Unknown fields: " + additionalProperties.keySet()));
        }
        return null;
    }
}
