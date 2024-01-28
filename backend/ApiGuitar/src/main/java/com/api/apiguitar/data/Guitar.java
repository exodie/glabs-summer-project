package com.api.apiguitar.data;


import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "guitars")
public class Guitar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String brand;

    private String model;

    @Column(columnDefinition = "TEXT")
    private String description;

    private BigDecimal price;

    @Column(name = "stock_quantity")
    private int stockQuantity;

    private String category;

    @Column(name = "image_url")
    private String imageUrl;

    public Guitar(String name, String brand, String model, String description, BigDecimal price,
                  int stockQuantity, String category, String imageUrl) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.imageUrl = imageUrl;
    }

    public Guitar() {
    }

    @Override
    public String toString() {
        return "Guitar{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stockQuantity=" + stockQuantity +
                ", category='" + category + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
