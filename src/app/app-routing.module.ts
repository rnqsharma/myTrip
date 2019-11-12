import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { FilterComponent } from './user/filter/filter.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  {path: 'editprofile', component: ProfileComponent},
  // {path: '', component: ViewProfileComponent}
  {path: '', component: FilterComponent},
  // {path: '', component: SearchFlightsComponent},
  {path:' signup', component: RegistrationComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ RegistrationComponent,SearchFlightsComponent,LoginComponent]
