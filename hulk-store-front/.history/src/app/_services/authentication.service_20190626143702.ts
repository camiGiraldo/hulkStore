import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { HttpRequest } from '@angular/common/http';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthenticationService {
    public token: string;
    public url:string;
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    cachedRequests: Array<HttpRequest<any>> = [];

    get isLoggedIn() {

     return this.loggedIn.asObservable(); // {2}
    }

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.url = environment.urlServices;
    }

    login(username: string, password: string): Observable<boolean> {
      debugger
      let headers = new Headers({
          'Content-Type': 'application/json'
      });      
      let user = {
        username:username,
        password:password
      }
     
    return this.http.post(this.url+'signin', user,
        {headers : headers}
        )
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            debugger
            
            if (response.status === 200) {
                // set token property
                debugger;
                let data = response.json();

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('BasicAuth','Bearer '+this.token);
                this.loggedIn.next(true);

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        localStorage.clear();

    }

    public collectFailedRequest(request: HttpRequest<any>): void {
        this.cachedRequests.push(request);
      }
    public retryFailedRequests(): void {
        // retry the requests. this method can
        // be called after the token is refreshed
      }
}