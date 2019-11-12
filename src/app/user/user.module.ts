import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlightListComponent } from './flight-list/flight-list.component';



@NgModule({
  declarations: [LoginComponent, FlightListComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
