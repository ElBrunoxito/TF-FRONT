import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../configP/provide.prod';
import { AuthService } from './auth.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  register(data:any):Observable<any>{ 
    const endpoint = `${environment.apiUrl}/authenticate/register`;
    return this.http.post<any>(endpoint,data);
  }



  login(data:any){
    const endpoint = `${environment.apiUrl}/authenticate/login`;
    return this.http.post<any>(endpoint,data);
  }

  getUser():Observable<User>{
    const id = this.authService.getId();
    const endpoint = `${environment.apiUrl}/user/getUser/${id}`
    return this.http.get<User>(endpoint);
  }


  getBalance():Observable<number>{
    const id = this.authService.getId();
    const endpoint = `${environment.apiUrl}/user/getBalance/${id}`
    return this.http.get<number>(endpoint);
  }

}
