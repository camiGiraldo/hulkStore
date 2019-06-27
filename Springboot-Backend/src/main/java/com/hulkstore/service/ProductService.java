package com.hulkstore.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hulkstore.dto.ProductDTO;
import com.hulkstore.entity.Product;
import com.hulkstore.repository.ProductRepository;

@Service
@Transactional
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
private EntityManager entityManager;
	
	@Autowired
	public ProductService(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	public void save(ProductDTO productDTO) {
		Product pro = new Product();
		pro.setId(productDTO.getId());
		pro.setName(productDTO.getName());
		pro.setStock(productDTO.getStock());
		pro.setDate_created(productDTO.getDateCreated());
		
		productRepository.save(pro);
	}

	public List<Product> findAll() {
		
		return productRepository.findAll();
	}
	
	public Optional<Product> findById(Long id) {
		return productRepository.findById(id);
		
	}
}
