package com.gravasapp.repository;



import com.gravasapp.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;


/**
* Interface for   TestRepository.
*
*/
public interface TestRepository extends JpaRepository<Test, Long> {
}
