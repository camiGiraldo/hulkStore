package com.hulkstore.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hulkstore.dto.SellDTO;
import com.hulkstore.entity.Product;
import com.hulkstore.entity.Sell;
import com.hulkstore.repository.ProductRepository;
import com.hulkstore.repository.SellRepository;

@Service
@Transactional
public class SellService {
	
	@Autowired
	SellRepository sellRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	private EntityManager entityManager;
	
	@Autowired
	public SellService(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	public void save(SellDTO sellDto) {
		
		/*Actualizar el stock de los productos vendido*/
		
		/**/
		
		
		Sell sell = new Sell();
		sell.setId(sellDto.getId());
		
		
		sellRepository.save(sell);
	}
	
	
	public List<Sell> findAll() {
		
		return sellRepository.findAll();
	}
	
	public Optional<Sell> findById(Long id) {
		return sellRepository.findById(id);
		
	}

}
