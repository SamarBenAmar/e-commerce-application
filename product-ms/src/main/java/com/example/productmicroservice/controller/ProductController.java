package com.example.productmicroservice.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.productmicroservice.model.Product;
import com.example.productmicroservice.service.IProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	private IProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> getAllProduct() throws IOException{
		return ResponseEntity.ok().body(productService.getAllProducts());
	}

	@GetMapping("/full-text-search")
	public List<Product> fullTextSearchProductsByCategory(@RequestParam("criteria") String criteria) throws IOException{
		return productService.fullTextSearchProductsByCategory(criteria);
	}


	@GetMapping("/pages")
	public ResponseEntity<List<Product>> getAllProductPages(@RequestParam("page") Integer page, @RequestParam("size") Integer size) throws IOException{
		return ResponseEntity.ok().body(productService.getAllProductsPages(page, size).getContent());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable String id) throws IOException{
		return ResponseEntity.ok().body(productService.getProductById(id));
	}

	@GetMapping("/category")
	public List<Product> getProductsByCategory(@RequestParam("category") String category) throws IOException{
		return productService.getProductsByCategory(category);
	}

	@PostMapping
	public ResponseEntity<Product> createProduct(@RequestBody Product product) throws IOException{
		return ResponseEntity.ok().body(this.productService.createProduct(product));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable String id, @RequestBody Product product) throws IOException{
		product.setId(id);
		return ResponseEntity.ok().body(this.productService.updateProduct(product));
	}

	@DeleteMapping("/{id}")
	public HttpStatus deleteProduct(@PathVariable String id) throws IOException{
		this.productService.deleteProductById(id);
		return HttpStatus.OK;
	}
}