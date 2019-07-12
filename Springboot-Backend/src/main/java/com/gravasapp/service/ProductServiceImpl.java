/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gravasapp.service;

import com.gravasapp.dto.ProductDTO;
import com.gravasapp.entity.Product;
import com.gravasapp.repository.ProductRepository;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nexos
 */
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    private EntityManager entityManager;

    @Autowired
    public ProductServiceImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }
    
    @Override
    public void save(ProductDTO productDTO) {
        Product pro = new Product();
        pro.setId(productDTO.getId());
        pro.setName(productDTO.getName());
        pro.setStock(productDTO.getStock());
        pro.setDate_created(productDTO.getDateCreated());

        productRepository.save(pro);
    }
    
    @Override
    public List<Product> findAll() {

        return productRepository.findAll();
    }
    
    @Override
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);

    }

    @Override
    public List<Product> findByCategoryId(Long category_id) throws Exception {
        return productRepository.findByCategoryId(category_id);
    }
    
    
}
