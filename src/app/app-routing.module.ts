import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';



const routes: Routes = [
  {path: '', component: SearchFlightsComponent},
  {path:'signup',component: RegistrationComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ RegistrationComponent,SearchFlightsComponent,LoginComponent]
