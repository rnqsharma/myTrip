import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitydataService } from 'src/app/service/citydata.service';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { Subscription } from 'rxjs';
import { ICity } from 'src/app/model/ICity';
import { IFlights } from 'src/app/model/IFlights';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private _flightService: FlightdataService, private _cityService: CitydataService, private route: ActivatedRoute) { }

  sub: Subscription;

  selectedDetails = {
    fromCity: 'Delhi',
    toCity: 'Delhi',
    departureDate: '',
    returnDate: '',
    travellers: '',
    class: 'Economy',
    tripType: ''
  };
  fromCity = '';
  toCity = '';
  departureDate = '';
  returnDate = '';
  travellers = '';
  class = '';
  tripType = '';

  flightsArray: Array<IFlights>;
  from: string[];
  to: string[];
  cities: ICity[];
  roundcounter = false;

  ngOnInit() {
    console.log('in search list component');
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

    this.sub = this.route.paramMap.subscribe(
      params => {
        this.selectedDetails.fromCity = params.get('from');
        this.selectedDetails.toCity = params.get('to');
        this.selectedDetails.departureDate = params.get('departuredate');
        this.selectedDetails.returnDate = params.get('returndate');
        this.selectedDetails.travellers = params.get('travellers');
        this.selectedDetails.class = params.get('class');
        this.selectedDetails.tripType = params.get('triptype');
      }
    );
    this.setValues();
  }

  findFlights() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/search', this.selectedDetails.toCity, this.selectedDetails.fromCity, this.roundcounter, this.selectedDetails.departureDate, this.selectedDetails.returnDate, this.selectedDetails.tripType, this.selectedDetails.travellers, this.selectedDetails.class]);
  }

  getTripType(e: any) {
    // if (this.roundcounter) {
    //   this.selectedDetails.tripType = 'Round Trip';
    // } else {
    //   this.selectedDetails.tripType = 'One Way';
    // }
    this.selectedDetails.tripType = e.target.value;
    if (this.selectedDetails.tripType === 'One Way') {
      this.roundcounter = true;
    } else {
      this.roundcounter = false;
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
    // console.log('selected departure date = ' + this.selectedDetails.departureDate);
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

  setValues() {
    this.tripType = this.selectedDetails.tripType.trim();
    // console.log('type = ' + this.tr ipType);
    this.fromCity = this.selectedDetails.fromCity.trim();
    console.log(this.fromCity);
    this.toCity = this.selectedDetails.toCity.trim();
    console.log(this.toCity);
    this.departureDate = this.selectedDetails.departureDate.trim();
    console.log(this.departureDate);
    this.returnDate = this.selectedDetails.returnDate.trim();
    console.log(this.returnDate);
    this.travellers = this.selectedDetails.travellers.trim();
    console.log(this.travellers);
    this.class = this.selectedDetails.class.trim();
    console.log(this.class);
  }
}
