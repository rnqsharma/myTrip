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
    fromCity: 'Delhi',
    toCity: 'Delhi',
    departureDate: '',
    returnDate: '',
    travellers: 0,
    class: ''
  };

  startDate: string;
  endDate: string;
  dateRange: string[];
  date: Date;

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
    this.router.navigate(['/search', this.selectedDetails.toCity, this.selectedDetails.fromCity, this.roundcounter]);
  }

  getTripType(e: any) {
    console.log('tripType = ' + e.target.value);
  }

  getFromCity(e: any) {
    console.log('from = ' + e.target.value);
    this.selectedDetails.fromCity = e.target.value.toString();
  }

  getToCity = (e: any) => {
    console.log('to = ' + e.target.value);
    this.selectedDetails.toCity = e.target.value;
    console.log(this.selectedDetails);
  }

  getDepartureDate(e: any) {
    console.log('departuredate = ' + e.target.value);
    this.selectedDetails.departureDate = e.target.value;
    this.date = e.target.value;
    this.validateDepartureDate(this.date);
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

  validateDepartureDate(date: Date) {
    date = this.date;
    const dd = date.getDate;
    const mm = date.getMonth;
    const yy = date.getFullYear;
    const today = new Date();
    const currentDate = today.getDate().toString;
    // console.log('current date = ' + currentDate);
    this.startDate = '' + currentDate;
    this.addMonthsToDate(this.startDate, 3);
    console.log('currentDate = ' + this.startDate);
    console.log('end date = ' + this.endDate);


    // for (const d = new Date(this.startDate); d <= new Date(this.endDate); d.setDate(d.getDate() + 1)) {
    //   dateRange.push($.datepicker.formatDate('yy-mm-dd', d));
    // }
  }

  addMonthsToDate(dt, n) {
    const dtt = dt.getMonth() + n;
    const endDate = new Date(dt.setMonth(dtt));
    this.endDate = '' + endDate.toString;
  }
}
