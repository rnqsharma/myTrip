import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { CityComponent } from './city/city.component';
import { AirlineComponent } from './airline/airline.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddnewflightComponent } from './addnewflight/addnewflight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AdminFlightlistComponent } from './admin-flightlist/admin-flightlist.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, CityComponent, AirlineComponent, AdminhomeComponent, AddnewflightComponent, ScheduleComponent,AdminFlightlistComponent],
  
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
