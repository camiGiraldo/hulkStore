import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Venta } from '../layout/ventas/venta';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class VentasService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlServicesSell;
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
  saveVenta(venta:Venta){
    debugger
    return this.http.post(`${this.url}save`,venta);
  }

}