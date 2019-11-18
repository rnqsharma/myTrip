import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddnewflightComponent } from './addnewflight/addnewflight.component';
import { AdminFlightlistComponent } from './admin-flightlist/admin-flightlist.component';
import { EditairlineComponent } from './editairline/editairline.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, AdminhomeComponent, AddnewflightComponent, AdminFlightlistComponent, EditairlineComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
