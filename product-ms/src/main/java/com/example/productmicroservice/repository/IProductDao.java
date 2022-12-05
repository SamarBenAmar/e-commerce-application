package com.example.productmicroservice.repository;

import com.example.productmicroservice.model.Product;

import java.util.List;

public interface IProductDao {

    public List<Product> getProductsByCategory(String category);
    
}
