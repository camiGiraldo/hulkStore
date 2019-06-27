package com.hulkstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hulkstore.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	
}
