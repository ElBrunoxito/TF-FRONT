import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private readonly TOKEN_KEY = 'token';
  private readonly ID_KEY = 'id';

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
  setId(id:number): void {
    localStorage.setItem(this.ID_KEY,id.toString());
  }

  getId(): string | null {
    return localStorage.getItem(this.ID_KEY);
  }

  dropId(): void {
    localStorage.removeItem(this.ID_KEY);
  }

}
