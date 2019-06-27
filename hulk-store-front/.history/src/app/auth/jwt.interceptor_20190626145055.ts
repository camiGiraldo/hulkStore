import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(private http: HttpClient){  
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`AddTokenInterceptor - ${req.url}`);
        debugger
        let jsonReq: HttpRequest<any> = req.clone({
        setHeaders:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    });
    
    return next.handle(jsonReq);
    }
}