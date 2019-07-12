package com.gravasapp.repository;


import com.gravasapp.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;


/**
* Interface for   CategoryRepository.
*
*/
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
