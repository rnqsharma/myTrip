import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
<<<<<<< HEAD
import { ViewProfileComponent } from './user/view-profile/view-profile.component';


const routes: Routes = [
  {path: 'editprofile', component: ProfileComponent},
  {path: '', component: ViewProfileComponent}
=======
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';



const routes: Routes = [
  {path: '', component: SearchFlightsComponent},
  {path:'signup',component: RegistrationComponent},
  {path:'login',component:LoginComponent}
>>>>>>> df223b6874ceff82878556b2a1ae5ca50eca591a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ RegistrationComponent,SearchFlightsComponent,LoginComponent]
