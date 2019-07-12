package com.gravasapp.repository;

import com.gravasapp.entity.Category;
import java.util.Date;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.*;
import com.gravasapp.entity.Product;
import java.util.Locale;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ProductRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void whenFindByI_thenReturnProduct() {
        // given
        Product batman = new Product();

        batman.setName("batman");
        batman.setStock(new Long(10));
        batman.setDate_created(new Date());
        Category cat = new Category();
        cat.setId(new Long(1));
        batman.setCategory(cat);

        entityManager.persist(batman);
        entityManager.flush();

        // when
        Optional<Product> found = productRepository.findById(batman.getId());
        Product prodFound = found.get();

        assertThat(prodFound.getId())
                .isEqualTo(batman.getId());

    }

}
