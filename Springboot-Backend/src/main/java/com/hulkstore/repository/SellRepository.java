package com.hulkstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hulkstore.entity.Sell;

public interface SellRepository extends JpaRepository<Sell, Long> {
	
}
