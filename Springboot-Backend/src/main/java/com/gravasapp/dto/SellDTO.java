package com.gravasapp.dto;

import java.util.Date;

public class SellDTO {
	private Long id;
	private String productJson;
	private Double totalSell;
	private Date dateCreated;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProductJson() {
		return productJson;
	}
	public void setProductJson(String productJson) {
		this.productJson = productJson;
	}
	public Double getTotalSell() {
		return totalSell;
	}
	public void setTotalSell(Double totalSell) {
		this.totalSell = totalSell;
	}
	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	
	
}
