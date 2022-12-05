package com.example.productmicroservice.service;

import java.io.IOException;
import java.util.List;

import com.example.productmicroservice.model.Product;

public interface IProductService {

    Product createProduct(Product product) throws IOException;
	Product updateProduct(Product product) throws IOException;
	
	List<Product> getAllProducts() throws IOException;
	Product getProductById(String productId) throws IOException;
	void deleteProductById(String productId) throws IOException;

    List<Product> getProductsByCategory(String category) throws IOException;
    
}
