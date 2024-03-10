import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logged:boolean=true
  constructor(private api:ApiService){
    this.api.sharedData.subscribe((data:any)=>{
      this.logged=data
    })
  }
  
  

}
