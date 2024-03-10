import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}

  // server= 'http://localhost:3000'
  server="https://journalapp-server.onrender.com"

  public sharedData = new BehaviorSubject(false)

  loginbehaviour(data:any){
    this.sharedData.next(data)
  }

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

  // single journal api
  getSingleJournalApi(id:any){
    return this.http.get(`${this.server}/vjournal/${id}`,this.addTokenToheaders())
  }

  // delete journal api
  deleteJournalApi(id:any){
    return this.http.delete(`${this.server}/delete/${id}`)
  }


}
