import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../configP/provide.prod';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }


  getAllCities():Observable<City[]>{
    const endpoint = `${environment.apiUrl}/getters/ListaCiudad`;
    return this.http.get<City[]>(endpoint);
  }
  

}
