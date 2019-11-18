import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { CitydataService } from 'src/app/service/citydata.service';
import { ICity } from 'src/app/model/ICity';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

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
    class: 'Economy',
    tripType: ''
  };

  startDate: string;
  endDate: string;
  dateRange: string[];
  date: Date;
  sub: Subscription;

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private _flightService: FlightdataService, private _cityService: CitydataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roundcounter = false;
    this._flightService.getFlightsData()
      .subscribe((fulldata: IFlights[]) => {
        this.flightsArray = fulldata;
      });

    this._cityService.getCityData()
    .subscribe((fulldata: ICity[]) => {
      this.cities = fulldata;
      this.to = this.cities.map( c => c.cityName);
      this.from = this.cities.map( c => c.cityName);
    });
  }

  findFlights() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/search', this.selectedDetails.toCity, this.selectedDetails.fromCity, this.roundcounter, this.selectedDetails.departureDate, this.selectedDetails.returnDate, this.selectedDetails.tripType, this.selectedDetails.travellers, this.selectedDetails.class]);
  }

  getTripType() {
    if (this.roundcounter) {
      this.selectedDetails.tripType = 'Round Trip';
    } else {
      this.selectedDetails.tripType = 'One Way';
    }
  }

  getFromCity(e: any) {
    this.selectedDetails.fromCity = e.target.value.toString();
  }

  getToCity = (e: any) => {
    this.selectedDetails.toCity = e.target.value;
  }

  getDepartureDate(e: any) {
    this.selectedDetails.departureDate = e.target.value;
    this.date = e.target.value;
    console.log('selected departure date = ' + this.selectedDetails.departureDate);
    this.validateDepartureDate(this.date);
  }

  getReturnDate(e: any) {
    this.selectedDetails.returnDate = e.target.value;
    console.log('selected return date = ' + this.selectedDetails.returnDate);
  }

  getTraveller(e: any) {
    this.selectedDetails.travellers = e.target.value;
  }

  getClass(e: any) {
    this.selectedDetails.class = e.target.value;
  }

  radioSetterOne() {
    this.roundcounter = false;
    this.getTripType();
  }

  radioSetterRound() {
    this.roundcounter = true  ;
    this.getTripType();
  }

  validateDepartureDate(date: Date) {
    // date = this.date;
    // const dd = date.getDate;
    // const mm = date.getMonth;
    // const yy = date.getFullYear;
    // const today = new Date();
    // const currentDate = today.getDate().toString;
    // this.startDate = '' + currentDate;
    // this.addMonthsToDate(this.startDate, 3);
    // console.log('currentDate = ' + this.startDate);
    // console.log('end date = ' + this.endDate);
  }

  addMonthsToDate(dt, n) {
    const dtt = dt.getMonth() + n;
    const endDate = new Date(dt.setMonth(dtt));
    this.endDate = '' + endDate.toString;
  }
}
