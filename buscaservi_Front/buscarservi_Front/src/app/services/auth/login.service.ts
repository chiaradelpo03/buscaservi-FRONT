import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from './LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/user/login';

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginRequest);
  }
}
