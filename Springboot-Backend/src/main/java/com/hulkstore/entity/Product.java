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
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(name="name")
	private String name;
	
	
	@Column(name="stock")
	private Long stock;
	
	@Temporal(TemporalType.DATE)
	@Column(name="date_created")
	private Date date_created;

	public Product() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getStock() {
		return stock;
	}

	public void setStock(Long stock) {
		this.stock = stock;
	}

	public Date getDate_created() {
		return date_created;
	}

	public void setDate_created(Date date_created) {
		this.date_created = date_created;
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", "
				+ "name=" + name + ", "
				+ "stock=" + stock + ", "
				+ "date_created=" + date_created
				+ "]";
	}
	

}
