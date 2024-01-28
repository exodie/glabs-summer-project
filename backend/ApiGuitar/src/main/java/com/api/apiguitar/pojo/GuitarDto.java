package com.api.apiguitar.pojo;

import lombok.Data;

import javax.persistence.Column;
import java.math.BigDecimal;

@Data
public class GuitarDto {

    private String name;

    private String brand;

    private String model;

    private String description;

    private BigDecimal price;

    private int stockQuantity;

    private String category;

    private String imageUrl;

}
