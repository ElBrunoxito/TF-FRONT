import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private readonly TOKEN_KEY = 'authToken';

  constructor() { }

  guardarToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  eliminarToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
