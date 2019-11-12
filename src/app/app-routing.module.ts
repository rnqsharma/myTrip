import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';

const routes: Routes = [
  {path: 'adminhome', component: AdminhomeComponent},
  {path: '', component: SearchFlightsComponent},
  {path: 'search', component: FlightListComponent},

  // {path: 'login', component: SearchFlightsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
