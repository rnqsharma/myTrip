import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlinelistcomponentComponent } from './airlinelistcomponent/airlinelistcomponent.component';
import { CityComponent } from './city/city.component';



@NgModule({
  declarations: [AirlinelistcomponentComponent, CityComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
