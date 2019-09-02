import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Repositories, User} from '../models/user';
const token = '341fce7fa8a0afe2749f35ccd2d9a44abb368fc3';

@Injectable()
export class UserService {
  private headers: Headers = new Headers();
  // private userUrl = 'https://api.github.com';
  // private userUrl = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + token
    })
  };

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://api.github.com/users', this.httpOptions);
    // return this.http.get<User[]>(this.userUrl + '/users');
  }

  getUserSearch(q: string): Observable<any> {
    return this.http.get('https://api.github.com/users?login=' + q, this.httpOptions);
    // return this.http.get(this.userUrl + '/users?login=' + q);
  }

  getUserRepositories(user: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>('https://api.github.com/users/' + user +  '/repos', this.httpOptions);
    // return this.http.get<Repositories[]>('http://localhost:3000/users/' + user +  '/repositories');
  }

  getUserFollowers(user: string): Observable<any> {
    return this.http.get('https://api.github.com/users/' + user + '/followers', this.httpOptions);
    // return this.http.get('http://localhost:3000/users/' + user + '/followers');
  }
}
