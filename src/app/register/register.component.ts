import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}

 registerForm = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  username:['',[Validators.required]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
 })


 register(){
  
  if(this.registerForm.valid){
    const username = this.registerForm.value.username
  const password = this.registerForm.value.password
  const email = this.registerForm.value.email

  const dt = {username , password, email}

  this.api.registerApi(dt).subscribe({
    next:(res:any)=>{
      Swal.fire('Registered Succesfully!')
      this.router.navigateByUrl('')

    },
    error:(err:any)=>{
      Swal.fire(err.error)
    }
  })

  }else{
    Swal.fire('Invalid Input, try again!')
  }
  
 }
}
