import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';



const routes: Routes = [
  {path: '', component: SearchFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
