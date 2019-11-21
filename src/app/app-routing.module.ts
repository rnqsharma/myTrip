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
import { ReviewBookingComponent } from './user/review-booking/review-booking.component';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { AddnewflightComponent } from './admin/addnewflight/addnewflight.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { AdminFlightlistComponent } from './admin/admin-flightlist/admin-flightlist.component';
import { AirlineComponent } from './admin/airline/airline.component';
import { EditComponent } from './admin/edit/edit.component';
import { CityViewComponent } from './admin/city-view/city-view.component';
import { AdminGuardGuard } from './admin/guard/admin-guard.guard';
import { PassengerDetailsComponent } from './user/passenger-details/passenger-details.component';


const routes: Routes = [

  {path: 'adminhome', component: AdminhomeComponent, canActivate: [AdminGuardGuard]},
  {path: 'reviewBooking/:fullName/:address/:mobile/:flightID', component: ReviewBookingComponent},
  {path: '', component: SearchFlightsComponent},
  {path: 'adminFlight', component: AdminFlightlistComponent, canActivate: [AdminGuardGuard]},
  {path: 'search/:to/:from/:roundtrip/:departuredate/:returndate/:triptype/:travellers/:class', component: FlightListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'viewprofile/:email', component: ViewProfileComponent},
  {path: 'editprofile', component: ProfileComponent},
  {path:'edit/:flightID',component: EditComponent},
  {path: 'search', component: SearchListComponent},
  {path: 'airlinelist' , component: AirlinelistcomponentComponent, canActivate: [AdminGuardGuard]},
  {path : 'addnewflight/:flightID' , component : AddnewflightComponent, canActivate: [AdminGuardGuard] },
  {path: 'flightSchedule', component: ScheduleComponent, canActivate: [AdminGuardGuard]},
  {path: 'editAirline', component: AirlineComponent, canActivate: [AdminGuardGuard]},
  {path: 'cityList', component: CityViewComponent, canActivate: [AdminGuardGuard]},
  {path: 'passengerDetails/:flightID', component: PassengerDetailsComponent},

  // {path : 'addnewflight/:flightID' , component : AddnewflightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ RegistrationComponent, SearchFlightsComponent, LoginComponent];
