import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { CityComponent } from './city/city.component';
import { AirlineComponent } from './airline/airline.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddnewflightComponent } from './addnewflight/addnewflight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AdminFlightlistComponent } from './admin-flightlist/admin-flightlist.component';
import { EditairlineComponent } from './editairline/editairline.component';
import { CityViewComponent } from './city-view/city-view.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, CityComponent, AirlineComponent, AdminhomeComponent, AddnewflightComponent, ScheduleComponent,AdminFlightlistComponent, CityViewComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
