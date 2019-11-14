import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { CityComponent } from './city/city.component';
import { AirlineComponent } from './airline/airline.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, CityComponent, AirlineComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
