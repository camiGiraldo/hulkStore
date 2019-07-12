package com.gravasapp.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gravasapp.dto.ProductDTO;
import com.gravasapp.enums.StatusEnum;
import com.gravasapp.service.ProductService;
import com.gravasapp.utils.ResponseHelper;
import java.util.logging.Level;
import java.util.logging.Logger;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/list")
    public ResponseHelper findAllProduct() {
        ResponseHelper response = new ResponseHelper();

        try {
            response.setData(productService.findAll());
            response.setStatus(StatusEnum.OK);

        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
            response.setStatus(StatusEnum.FAILURE);
            response.setMessage("Ocurrio un error al momento de obtener la lista de productos: " + ex);
        }

        return response;
    }

    @GetMapping("/product/{id}")
    public ResponseHelper getProductById(@PathVariable String id) {
        ResponseHelper response = new ResponseHelper();
        try {
            response.setData(productService.findById(new Long(id)));
            response.setStatus(StatusEnum.OK);
        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
            response.setStatus(StatusEnum.FAILURE);
            response.setMessage("Ocurrio un error al momento de obtener la lista de productos: " + ex.getMessage());
        }
        response.setStatus("OK");
        return response;
    }

    @PostMapping("/save")
    public ResponseHelper addProduct(@RequestBody ProductDTO dto) {
        ResponseHelper response = new ResponseHelper();
        try {
            productService.save(dto);
            response.setStatus(StatusEnum.OK);
        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
            response.setStatus(StatusEnum.FAILURE);
            response.setMessage("Ocurrio un error al momento de guardar el producto: " + ex.getMessage());
        }
        return response;
    }

}
