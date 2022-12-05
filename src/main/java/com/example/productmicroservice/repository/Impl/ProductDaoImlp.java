package com.example.productmicroservice.repository.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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

    
}
