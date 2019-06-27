import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../layout/productos/producto';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class VentasService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlServicesProduct;
  }
  
  /*@method getVentaById
  * @description Metodos que permite traer un producto
  * @param id identificador del producto
  */
  getVentaById(id:string) {
    
    return this.http.get(`${this.url}product/${id}`);
  }

  /*@method saveVenta
  * @description Metodos que permite guardar una venta
  * @param producto objeto de tipo venta
  */
  saveVenta(producto:Producto){
    debugger
    return this.http.post(`${this.url}save`,producto);
  }

}