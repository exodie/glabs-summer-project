package com.api.apiguitar.pojo;

import lombok.Data;

@Data
public class StringDto {

    private Long id;

    private String name;

    private String category;

    private Double price;

    private String country;

    private Integer stockQuantity;

    private String sizeNumber;

    private Integer numberOfString;

    private String coverage;

    private String typeOfBraid;

    private Integer[] caliberString;
}
