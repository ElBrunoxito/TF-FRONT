import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private readonly TOKEN_KEY = 'token';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  dropToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
