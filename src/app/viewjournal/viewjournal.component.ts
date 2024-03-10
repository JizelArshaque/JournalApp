import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewjournal',
  templateUrl: './viewjournal.component.html',
  styleUrls: ['./viewjournal.component.css']
})
export class ViewjournalComponent implements OnInit{
  constructor(private route:ActivatedRoute,private api:ApiService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {

    this.route.params.subscribe((dd:any)=>{
      const id = dd.id
      // console.log(id);
      this.getjournal(id)
      
    })
    
  }
  dets:any={}


  delete(id:any){
    Swal.fire({
      title: "Do you want to save the changes?",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete!",
      // denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.api.deleteJournalApi(id).subscribe({
          next:(res:any)=>{
            this.router.navigateByUrl('/home')
            Swal.fire("Deleted!","","success");

          },
          error:(err:any)=>{
            Swal.fire("coulndt delete atm");
          }
        })
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }


  getjournal(id:any){
    this.api.getSingleJournalApi(id).subscribe((det:any)=>{
      this.dets=det
      console.log(this.dets);
      
    })
  }

}
