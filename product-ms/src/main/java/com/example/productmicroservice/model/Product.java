package com.example.productmicroservice.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "ProductDB")
public class Product {

    @Id
	private String id;

    @TextIndexed
	private String name;
    
    @TextIndexed
	private String category;

    @TextIndexed
    private String brand;
    private Double price;
    private Double quantity;
    private String pictureUrl;

    @TextIndexed
    private String description;
}
