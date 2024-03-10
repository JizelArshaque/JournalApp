import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.css']
})
export class AddJournalComponent {
  
  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}
  jdets:any={}

  journalForm = this.fb.group({
    content:['',[Validators.required]]
  })
  addJournal(){
    if(this.journalForm.valid){
      const content = this.journalForm.value.content
      
      const dateFromTimestamp = new Date().getTime();
      const date1 = new Date()
      const date= date1.toString()
      const data = { content , date, dateFromTimestamp}
      console.log(data);
      
      this.api.addJournalApi(data).subscribe({
        next:(res)=>{
          Swal.fire('Entry added!')
          this.router.navigateByUrl('/home')
        },
        error:(err:any)=>{
          Swal.fire(err.error)
        }
      })
      
    }else{
      Swal.fire('Not enough data!')
    }
  }

}
