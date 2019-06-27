import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductosService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlServicesProduct;
  }
  

  getProductoById(id:string) {
    debugger
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams()
    .set('id', id);
    
    return this.http.post(this.url + 'product',
      params);
  }
}