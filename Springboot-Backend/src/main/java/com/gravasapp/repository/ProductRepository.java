package com.gravasapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gravasapp.entity.Product;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
    List<Product>findByCategoryId(Long id);
	
}
