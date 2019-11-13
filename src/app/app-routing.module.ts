import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { SearchListComponent } from './user/search-list/search-list.component';



const routes: Routes = [
  {path: '', component: SearchFlightsComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'viewprofile', component: ViewProfileComponent},
  {path: 'editprofile', component: ProfileComponent},
  {path: 'search', component: SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ RegistrationComponent, SearchFlightsComponent, LoginComponent];
