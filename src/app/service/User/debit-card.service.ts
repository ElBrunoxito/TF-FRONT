import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../configP/provide.prod';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {

  constructor(private http:HttpClient,private authService:AuthService) { }


  addDebitCard(data:any) :Observable<any>{
    
    const endpoint = `${environment.apiUrl}/user/CrearTarjetaDebito`;

    //const authToken = this.authService.getToken();  // Obtiene el token JWT del servicio de autenticación

    // Configura los encabezados
    //let headers = new HttpHeaders();
    //headers = headers.set('Content-Type', 'application/json');  // Tipo de contenido JSON
    //if (authToken) {
    //headers = headers.set('Authorization', `Bearer ${authToken}`);
    //}

    return this.http.post<any>(endpoint,data)
  }
  
}
