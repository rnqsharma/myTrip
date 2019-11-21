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

  today = new Date();
  currentDate = this.today.getDate();
  currentMonth = this.today.getMonth() + 1;
  currentYear = this.today.getFullYear();
  fullDate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDate;
  endMonth = this.today.getMonth() + 3;
  fullEndDate = this.currentYear + '-' + this.endMonth + '-' + this.currentDate;

  selectedDetails = {
    fromCity: 'Delhi',
    toCity: 'Delhi',
    departureDate: '' + this.fullDate,
    returnDate: '',
    travellers: 1,
    class: 'Economy',
    tripType: 'One Way'
  };

  private validationMessages: { [key: string]: { [key: string]: string } };
  // private genericValidator: GenericValidator;
  startDate = this.fullDate;
  endDate = this.fullEndDate;
  sub: Subscription;
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private _flightService: FlightdataService, private _cityService: CitydataService, private route: ActivatedRoute) {
    this.validationMessages = {

    };
   }

  ngOnInit() {
    console.log(this.today.getMonth());
    console.log(this.fullDate);
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

    const today = new Date();
    const currentDate = today.getDate().toString;
    this.selectedDetails.departureDate = '' + currentDate;
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
    console.log(this.selectedDetails.tripType);
  }

  getFromCity(e: any) {
    this.selectedDetails.fromCity = e.target.value;
  }

  getToCity = (e: any) => {
    this.selectedDetails.toCity = e.target.value;
  }

  getDepartureDate(e: any) {
    this.selectedDetails.departureDate = e.target.value;
    // this.date = e.target.value;
    console.log('selected departure date = ' + this.selectedDetails.departureDate);
    // this.validateDepartureDate(this.date);
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

  validateDepartureDate(date: Date) {}

  // addMonthsToDate(dt, n) {
  //   const dtt = dt.getMonth() + n;
  //   const endDate = new Date(dt.setMonth(dtt));
  //   this.endDate = '' + endDate.toString;
  // }
}
