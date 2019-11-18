import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { SearchListComponent } from './user/search-list/search-list.component';
import { ReviewBookingComponent } from './user/review-booking/review-booking.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { AddnewflightComponent } from './admin/addnewflight/addnewflight.component';
import { AdminFlightlistComponent } from './admin/admin-flightlist/admin-flightlist.component';


const routes: Routes = [
  {path: 'editprofile', component: ProfileComponent},
  // {path: '', component: ViewProfileComponent},

  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'reviewBooking/:flightID', component: ReviewBookingComponent},
  {path: '', component: SearchFlightsComponent},
  {path: 'adminFlight', component: AdminFlightlistComponent},
  {path: 'search/:to/:from/:roundtrip', component: FlightListComponent},

  // {path: '', component: SearchFlightsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'viewprofile/:email', component: ViewProfileComponent},
  {path: 'editprofile', component: ProfileComponent},
  {path: 'search', component: SearchListComponent},
  {path: 'airlinelist' , component: AirlinelistcomponentComponent},
  {path : 'addnewflight/:flightID' , component : AddnewflightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ RegistrationComponent, SearchFlightsComponent, LoginComponent];
