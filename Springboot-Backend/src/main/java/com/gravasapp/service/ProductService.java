package com.gravasapp.service;

import com.gravasapp.dto.ProductDTO;
import com.gravasapp.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    public void save(ProductDTO productDTO) throws Exception;
    public List<Product> findAll() throws Exception;
    public Optional<Product> findById(Long id) throws Exception;
    public List<Product> findByCategoryId(Long id) throws Exception;
}
