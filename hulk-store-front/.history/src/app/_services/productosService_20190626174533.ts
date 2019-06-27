import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    let myParams = new URLSearchParams();
    myParams.set('idFacultad', id);
    return this.http.post(this.url + 'product',
      {id:id});
  }
}