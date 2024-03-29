import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    const email = sessionStorage.getItem('email')
    this.getUserdata(email)
    this.getJournal()
  }
  constructor(private api:ApiService){}
  user:any={}

  allJournal:any=[]
  p:number=1

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

  getJournal(){
    this.api.getJournalApi().subscribe({
      next:(res:any)=>{
        this.allJournal=res
        
        
      },
      error:(err:any)=>{
        console.log(err.error);
        
      }
    })
  }
}
