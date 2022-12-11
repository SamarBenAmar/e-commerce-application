package com.example.productmicroservice.repository.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;

import com.example.productmicroservice.model.Product;
import com.example.productmicroservice.repository.IProductDao;

@Repository
public class ProductDaoImlp implements IProductDao {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Product> getProductsByCategory(String category) {
        
        Query query = new Query();
        query.addCriteria(Criteria.where("category").is(category));
        List<Product> products =  new ArrayList<>(mongoTemplate.find(query, Product.class));
        List<Product> result = new ArrayList<>();
        for (Product product : products) {
            if(product.getQuantity()>0){
                result.add(product);
            }
        }
        return result;

    }

    @Override
    public List<Product> getProductByTerm(String term) {
        Criteria criteria = new Criteria();
        criteria.orOperator(Criteria.where("brand").is(term),Criteria.where("category").is(term),Criteria.where("brand").is(term));
        Query query = new Query(criteria);
        List<Product> products =  new ArrayList<>(mongoTemplate.find(query, Product.class));
        List<Product> result = new ArrayList<>();
        for (Product product : products) {
            if(product.getQuantity()>0){
                result.add(product);
            }
        }
        return result;
    }

    @Override
    public List<Product> filterProductsByPrice(Double gte, Double lte) {
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("price").gte(gte), Criteria.where("price").lte(lte));
        Query query = new Query(criteria);
        List<Product> products =  new ArrayList<>(mongoTemplate.find(query, Product.class));
        List<Product> result = new ArrayList<>();
        for (Product product : products) {
            if(product.getQuantity()>0){
                result.add(product);
            }
        }
        return result;
    }

    @Override
    public Page<Product> getAllProductsPages(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Query query = new Query();
        query.with(pageable);
        return PageableExecutionUtils.getPage(mongoTemplate.find(query, Product.class), pageable, () -> 
        mongoTemplate.count(query.skip(0).limit(0), Product.class));
    }
    
}
