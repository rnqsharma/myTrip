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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AirlinelistcomponentComponent } from './admin/airlinelistcomponent/airlinelistcomponent.component';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchFlightsComponent,
    AirlinelistcomponentComponent,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
