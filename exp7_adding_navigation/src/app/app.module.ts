import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations'; 
import{FormsModule,ReactiveFormsModule}from'@angular/forms'; 
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    MatSidenavModule, 
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
