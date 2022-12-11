package com.example.productmicroservice.service.Impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.example.productmicroservice.model.Product;
import com.example.productmicroservice.repository.IProductDao;
import com.example.productmicroservice.repository.IProductRepository;
import com.example.productmicroservice.service.IProductService;

@Service
@Transactional
public class ProductServiceImpl implements IProductService{

	@Autowired
	private IProductRepository productRepository;

    @Autowired
	private IProductDao productDao;
	
	@Override
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product) throws IOException {
		Optional<Product> productDb = this.productRepository.findById(product.getId());
		
		if(productDb.isPresent()) {
			Product productUpdate = productDb.get();
			productUpdate.setId(product.getId());
			productUpdate.setName(product.getName());
			productUpdate.setPrice(product.getPrice());
			productUpdate.setBrand(product.getBrand());
			productUpdate.setQuantity(product.getQuantity());
			productUpdate.setCategory(product.getCategory());
			productUpdate.setPictureUrl(product.getPictureUrl());
			productUpdate.setDescription(product.getDescription());
			productRepository.save(productUpdate);
			return productUpdate;
		}else {
			throw new IOException("Product not found with id : " + product.getId());
		}		
	}


	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}


	@Override
	public Product getProductById(String productId) throws IOException {
		Optional<Product> productDb = this.productRepository.findById(productId);
		
		if(productDb.isPresent()) {
			return productDb.get();
		}else {
			throw new IOException("Product not found with id : " + productId);
		}
	}


	@Override
	public void deleteProductById(String productId) throws IOException {
		Optional<Product> productDb = this.productRepository.findById(productId);
		
		if(productDb.isPresent()) {
			this.productRepository.delete(productDb.get());
		}else {
			throw new IOException("Product not found with id : " + productId);
		}
		
	}


    @Override
    public List<Product> getProductsByCategory(String category) throws IOException {
        return this.productDao.getProductsByCategory(category);
    }



	@Override
	public Page<Product> getAllProductsPages(Integer page, Integer size) throws IOException {
		return this.productDao.getAllProductsPages(page, size);
	}

}