import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { CitydataService } from 'src/app/service/citydata.service';
import { ICity } from 'src/app/model/ICity';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  flightsArray: Array<IFlights>;
  from: string[];
  to: string[];
  cities: ICity[];
  roundcounter: boolean;

  selectedDetails = {
    fromCity: '',
    toCity: '',
    departureDate: '',
    returnDate: '',
    travellers: 0,
    class: ''
  };

  // tslint:disable-next-line: variable-name
  constructor(private router: Router, private _flightService: FlightdataService, private _cityService: CitydataService) { }

  ngOnInit() {
    this.roundcounter = false;
    console.log('In O');
    this._flightService.getFlightsData()
      .subscribe((fulldata: IFlights[]) => {
        console.log(fulldata);
        this.flightsArray = fulldata;
      });

    this._cityService.getCityData()
    .subscribe((fulldata: ICity[]) => {
      console.log(fulldata);
      this.cities = fulldata;
      console.log(this.cities);
      this.to = this.cities.map( c => c.cityName);
      this.from = this.cities.map( c => c.cityName);
    });
  }


  findFlights() {
    console.log(this.roundcounter);
    console.log(this.selectedDetails);
    this.router.navigate(['/search', this.to, this.from, this.roundcounter]);
  }

  getFromCity(e: any) {
    console.log('from = ' + e.target.value);
    this.selectedDetails.fromCity = e.target.value.toString();
  }

  getToCity = (e: any) => {
    console.log('to = ' + e.target.value);
    console.log(this.selectedDetails);
  }

  getDepartureDate(e: any) {
    console.log('departuredate = ' + e.target.value);
    this.selectedDetails.departureDate = e.target.value;
  }

  getReturnDate(e: any) {
    console.log('returndate = ' + e.target.value);
    this.selectedDetails.returnDate = e.target.value;
  }

  getTraveller(e: any) {
    console.log('traveller = ' + e.target.value);
    this.selectedDetails.travellers = e.target.value;
  }

  getClass(e: any) {
    console.log('class = ' + e.target.value);
    this.selectedDetails.class = e.target.value;
  }

  radioSetter() {
    this.roundcounter = !this.roundcounter;
  }
}
