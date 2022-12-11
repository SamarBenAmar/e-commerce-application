package com.example.productmicroservice.repository;

import com.example.productmicroservice.model.Product;

import java.util.List;

import org.springframework.data.domain.Page;

public interface IProductDao {

    public List<Product> getProductsByCategory(String category);

    public List<Product> getProductByTerm(String term);

    public List<Product> filterProductsByPrice(Double gte, Double lte);

    public Page<Product> getAllProductsPages(Integer page, Integer size);

   
    
}
