import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, AdminhomeComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
