import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddnewflightComponent } from './addnewflight/addnewflight.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, AdminhomeComponent, AddnewflightComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
