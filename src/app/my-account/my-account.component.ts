import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{
  ngOnInit(): void {
    const id = sessionStorage.getItem('email')
    this.getUserdata(id)
  }
  constructor(private router:Router, private api:ApiService){}
  user:any={}
  getUserdata(id:any){
    this.api.getUserAPi(id).subscribe({
      next:(res:any)=>{
        this.user=res
      },
      error:(er1:any)=>{
        Swal.fire('Error While loading page! please reload the page again')
      }
    })
  }

  logout(){
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
}
