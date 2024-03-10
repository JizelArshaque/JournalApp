import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSService {

  constructor() { 
    
  }

  islogged(){
    return !!sessionStorage.getItem("token")
  }
}
