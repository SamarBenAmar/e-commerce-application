package com.example.productmicroservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.productmicroservice.model.Product;

@Repository
public interface IProductRepository extends MongoRepository<Product, String> {


}
