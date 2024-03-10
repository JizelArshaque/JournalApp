import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addTokenToheaders(){
    let token = sessionStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append('Authorization', `Bearer ${token}`) 
    }
    return {headers}
  }

  // add journal
  addJournalApi(data:any){
    return this.http.post(`${this.server}/addjournal`,data,this.addTokenToheaders())
  }

  // getjournal 
  getJournalApi(){
    return this.http.get(`${this.server}/getjournals`,this.addTokenToheaders())
  }


}
