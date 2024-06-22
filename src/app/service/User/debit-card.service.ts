import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../configP/provide.prod';
import { AuthService } from '../Auth/auth.service';
import { DebitCard } from '../../models/DebitCard';

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {

  constructor(private http:HttpClient,private authService:AuthService) { }


  addDebitCard(data:any) :Observable<any>{
    
    const endpoint = `${environment.apiUrl}/user/CrearTarjetaDebito`;
    return this.http.post<any>(endpoint,data)
  }

  getDebitCard():Observable<DebitCard>{
    const id = this.authService.getId();
    const endpoint = `${environment.apiUrl}/user/VerDatosTarjeta/${id}`
    return this.http.get<DebitCard>(endpoint);

  }

  
}
