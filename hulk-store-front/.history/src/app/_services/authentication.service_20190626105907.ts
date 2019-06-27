import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthenticationService {
    public token: string;
    public url:string;
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

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
      let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
      });

      let myParams = new URLSearchParams();
      myParams.set('usr', username);
      myParams.set('pas',password);
      let options = new RequestOptions({ headers: headers, params: myParams});


        return this.http.post(this.url + 'login',
            myParams.toString(),
            {headers : headers}
            )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response


                const status = response.json().status;



                if (status === 'OK') {
                    // set token property

                    const data = response.json().data;
                    this.token = data.token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                    localStorage.setItem('isLoggedin', 'true');
                    this.loggedIn.next(true);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    authenticate(username, password) {
        console.log(username);
        console.log(password);
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.get<User>(this.url + 'login', { headers }).pipe(
          map(
            userData => {
              sessionStorage.setItem('username', username);
              let authString = 'Basic ' + btoa(username + ':' + password);
              sessionStorage.setItem('basicauth', authString);
              return userData;
            }
          )
    
        );
      }
    

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        localStorage.clear();

    }
}
