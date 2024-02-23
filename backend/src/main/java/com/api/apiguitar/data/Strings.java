package com.api.apiguitar.data;

import com.sun.istack.NotNull;
import com.vladmihalcea.hibernate.type.array.IntArrayType;
import lombok.Data;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;


@Data
@Entity
@Table(name = "Strings")
@TypeDefs({
        @TypeDef(name = "int-array", typeClass = IntArrayType.class)
})
public class Strings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "category")
    private String category;

    @NotNull
    @Column(name = "price")
    private Double price;

    @Column(name = "country")
    private String country;

    @NotNull
    @Column(name = "stockquantity")
    private Integer stockQuantity;

    @Column(name = "sizenumber")
    private String sizeNumber;

    @Column(name = "numberofstring")
    private Integer numberOfString;

    @Column(name = "coverage")
    private String coverage;

    @Column(name = "typeofbraid")
    private String typeOfBraid;

    @Type(type = "int-array")
    @Column(name = "caliberstring", columnDefinition = "Integer[]")
    private Integer[] caliberString;

    public Strings() {

    }

    public Strings(String name, String category, Double price, String country, Integer stockQuantity, String sizeNumber,
                   Integer numberOfString, String coverage, String typeOfBraid, Integer[] caliberString) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.country = country;
        this.stockQuantity = stockQuantity;
        this.sizeNumber = sizeNumber;
        this.numberOfString = numberOfString;
        this.coverage = coverage;
        this.typeOfBraid = typeOfBraid;
        this.caliberString = caliberString;
    }
}