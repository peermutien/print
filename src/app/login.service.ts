import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL='http://localhost:8099/api/jwt/auth'
  baseURL1='http://localhost:8099/api/jwt/reg'

 constructor(private httpClient:HttpClient ) { }

//Token Generation
 addUser(login?:Login):Observable<Object>{
 console.log("login console");
return this.httpClient.post<object>(`${this.baseURL}`,login)
}

//User Registration
regUser(login?:Login):Observable<Object>{
 console.log("registration console");
 return this.httpClient.post<object>(`${this.baseURL1}`,login)
}
}