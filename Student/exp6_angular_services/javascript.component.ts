import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent 
{  
  title= "JavaScript"; 
 
  constructor(private enrollService:EnrollService) 
  { 
 
  } 
 
  OnEnroll() 
  { 
       this.enrollService.OnEnrollClicked(this.title); 
  }   

}
