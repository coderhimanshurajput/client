import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('_auth');
  }

  getUserInfo() {
  	return JSON.parse(localStorage.getItem('_user'));
  }

}