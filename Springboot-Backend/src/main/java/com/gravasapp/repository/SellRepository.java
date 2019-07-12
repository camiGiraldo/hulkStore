package com.gravasapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gravasapp.entity.Sell;

public interface SellRepository extends JpaRepository<Sell, Long> {
	
}
