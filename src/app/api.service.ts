import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}

  server= 'http://localhost:3000'

  // reg
  registerApi(user:any){
    return this.http.post(`${this.server}/register`,user)
  }

  loginApi(user:any){
    return this.http.post(`${this.server}/login`,user)
  }

  // getusers data
  getUserAPi(id:any){
    return this.http.get(`${this.server}/user/${id}`)

  }
}
