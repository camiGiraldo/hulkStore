import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductosService {

  public url: string;

  constructor(private http: Http) {
    this.url = environment.urlServicesProduct;
  }

  getProductoById(id:string) {

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let myParams = new URLSearchParams();
    

    let options = new RequestOptions({ headers: headers, params: myParams });

    return this.http.post(this.url + 'product',
      {id:id});
  }
}