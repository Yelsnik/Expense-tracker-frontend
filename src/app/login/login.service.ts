import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

export interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  signIn(login: Login) {
    return this.http.post(`${environment.BASE_URL}/auth/sign-in`, login);
  }
}
