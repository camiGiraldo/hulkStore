import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { Producto } from '../layout/productos/producto';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductosService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlServicesProduct;
  }
  

  getProductoById(id:string) {
    
    return this.http.get(`${this.url}product/${id}`);
  }
  
  saveProducto(producto:Producto){
    return this.http.post(`${this.url}save`);
  }

}