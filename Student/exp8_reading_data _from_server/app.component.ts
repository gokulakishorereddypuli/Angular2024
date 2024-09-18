import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp8_reading_data_from_server';
  userList:any[] = []; 
  constructor(private fetchService: FetchDataService) {} 
  ngOnInit(): void{ 
    this.fetchService.getUser().subscribe(user => this.userList = user); 
  }
}
