import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchListComponent } from './user/search-list/search-list.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { AddnewflightComponent } from './admin/addnewflight/addnewflight.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';


const routes: Routes = [
  // {path: '', component: ViewProfileComponent},

  {path: 'adminhome', component: AdminhomeComponent},
  {path: '', component: SearchFlightsComponent},
  {path: 'search/:to/:from/:roundtrip', component: FlightListComponent},

  // {path: '', component: SearchFlightsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'viewprofile', component: ViewProfileComponent},
  {path: 'editprofile', component: ProfileComponent},
  {path: 'search', component: SearchListComponent},
  {path: 'airlinelist' , component: AirlinelistcomponentComponent},
  {path : 'addnewflight' , component : AddnewflightComponent },
  {path: 'flightSchedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ RegistrationComponent, SearchFlightsComponent, LoginComponent];
