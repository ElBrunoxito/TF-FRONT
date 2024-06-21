import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../configP/provide.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{ 
    const endpoint = `${environment.apiUrl}/authenticate/register`;
    return this.http.post<any>(endpoint,data);
  }



  login(data:any){
    const endpoint = `${environment.apiUrl}/authenticate/login`;
    console.log(endpoint)
    return this.http.post<any>(endpoint,data);
  }

}
