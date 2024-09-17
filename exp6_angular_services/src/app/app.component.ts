import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AngularComponent,JavascriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp6_angular_services';

}
