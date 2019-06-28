package com.hulkstore.rest.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hulkstore.dto.ProductDTO;
import com.hulkstore.service.ProductService;
import com.hulkstore.utils.ResponseHelper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/list")
	public ResponseHelper findAllProduct() {
		ResponseHelper response = new ResponseHelper();
		response.setData(productService.findAll());
		return response;
	}
	
	
	@GetMapping("/product/{id}")
	public ResponseHelper getProductById(@PathVariable String id) {
		ResponseHelper response = new ResponseHelper();
		response.setData(productService.findById(new Long(id)));
		response.setStatus("OK");
		return response;
	}
	
	@PostMapping("/save")
	 public void addProduct(@RequestBody ProductDTO dto) {
		ResponseHelper response = new ResponseHelper();
		try {
			response.setStatus("OK");	
			productService.save(dto);
		}
		catch (Exception e) {
			response.setStatus("FAILURE");	
		}
	}

}
