package com.hulkstore.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="sell")
public class Sell {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="total_sell")
	private Double totalSell;
	
	@Column(name="product_json")
	private String productJson;
	
	@Temporal(TemporalType.DATE)
	@Column(name="date_created")
	private Date date_created;

	public Sell() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getTotalSell() {
		return totalSell;
	}

	public void setTotalSell(Double totalSell) {
		this.totalSell = totalSell;
	}

	public String getProductJson() {
		return productJson;
	}

	public void setProductJson(String productJson) {
		this.productJson = productJson;
	}
	
	public Date getDate_created() {
		return date_created;
	}

	public void setDate_created(Date date_created) {
		this.date_created = date_created;
	}

	@Override
	public String toString() {
		return "Sell [id=" + id + ", "
				+ "totalSell=" + totalSell + ", "
				+ "productJson=" + productJson + ", "
				+ "date_created=" + date_created
				+ "]";
	}
	
	
	
	
}
