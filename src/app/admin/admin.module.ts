import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { AddnewflightComponent } from './addnewflight/addnewflight.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, AddnewflightComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
