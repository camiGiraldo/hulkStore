import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Headers} from '@angular/http';
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
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let myParams = new URLSearchParams();
    myParams.set('id', id);
    
    return this.http.post(this.url + 'product',
      myParams.toString(),
      { headers: headers }
      );
  }
}