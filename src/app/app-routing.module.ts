import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { FilterComponent } from './user/filter/filter.component';


const routes: Routes = [
  {path: 'editprofile', component: ProfileComponent},
  // {path: '', component: ViewProfileComponent}
  {path: '', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
