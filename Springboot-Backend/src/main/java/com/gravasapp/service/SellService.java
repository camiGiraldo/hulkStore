package com.gravasapp.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.GsonBuilder;
import com.gravasapp.dto.ProductDTO;
import com.gravasapp.dto.SellDTO;
import com.gravasapp.entity.Product;
import com.gravasapp.entity.Sell;
import com.gravasapp.repository.ProductRepository;
import com.gravasapp.repository.SellRepository;

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
		
		String jsonString = sellDto.getProductJson();
		ProductDTO[] proDto = new GsonBuilder().create().fromJson(jsonString, ProductDTO[].class);
		 
		for(ProductDTO product: proDto) {
			
			/*Obtenemos el producto a actualizar y le restamos el valor de la venta*/
			Optional<Product> obj = productRepository.findById(product.getId());
			Product productUpdate = obj.get();
			productUpdate.setStock(productUpdate.getStock() - product.getStock());
			
			productRepository.save(productUpdate);					
		}
		/**/
		
		
		Sell sell = new Sell();
		sell.setId(sellDto.getId());
		sell.setTotalSell(sellDto.getTotalSell());
		sell.setProductJson(sellDto.getProductJson());
		sell.setDate_created(new Date());
		
		
		sellRepository.save(sell);
	}
	
	
	public List<Sell> findAll() {
		
		return sellRepository.findAll();
	}
	
	public Optional<Sell> findById(Long id) {
		return sellRepository.findById(id);
		
	}

}
