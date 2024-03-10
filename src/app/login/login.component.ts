import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){

  }

 loginForm = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
 })

 login(){
  if(this.loginForm.valid){
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    const data = {email,password}

    this.api.loginApi(data).subscribe({
      next:(res:any)=>{
        Swal.fire('login succesful!')
        sessionStorage.setItem("email",res.existingUser.email)
        sessionStorage.setItem("token",res.token)
        // this.api.loginbehaviour({data:true})
        this.api.sharedData.next(false)

        this.router.navigateByUrl('/home')
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })

  }else{
    Swal.fire('Invalid input!')
  }
 }

  

 
}
