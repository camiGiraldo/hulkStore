import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {Router} from "@angular/router"
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(private http: HttpClient, private router: Router){  
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer '+localStorage.getItem("token")
            })
          });
        
          //console.log('Intercepted HTTP call', authReq);
        
          return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse {
              if (err.status === 401) {
                this.router.navigate(['/login']);
              }
            }
          });
    }
}