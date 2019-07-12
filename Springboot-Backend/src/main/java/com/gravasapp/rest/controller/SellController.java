package com.gravasapp.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gravasapp.dto.SellDTO;
import com.gravasapp.service.SellService;
import com.gravasapp.utils.ResponseHelper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/sell")
public class SellController {
	
	@Autowired
	SellService sellService;
	
	@GetMapping("/list")
	public ResponseHelper findAllTags() {
		ResponseHelper response = new ResponseHelper();
		response.setData(sellService.findAll());
		return response;
	}
	
	@PostMapping("/save")
	 public void addSell(@RequestBody SellDTO sellDto) {
		ResponseHelper response = new ResponseHelper();
		try {
			response.setStatus("OK");	
			sellService.save(sellDto);
		}
		catch (Exception e) {
			response.setStatus("FAILURE");	
		}
	}

}
