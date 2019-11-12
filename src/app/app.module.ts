import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './user/login/login.component';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { ProfileComponent } from './user/profile/profile.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './user/filter/filter.component';

// import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { MatButtonModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchFlightsComponent,
    HeaderComponent,
    ViewProfileComponent,
    FilterComponent,

    routingComponents,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchFlightsComponent,
    // AirlinelistcomponentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
