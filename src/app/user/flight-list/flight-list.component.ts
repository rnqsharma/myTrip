import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { IProfile } from 'src/app/model/IProfile';
import { ProfiledataService } from 'src/app/service/profiledata.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {


  buttonClicked = false;
  lmao = 'unclicked';
  to = '';
  from = '';
  travellers = '';
  private sub: Subscription;

  selectedDetails = {
    fromCity: '',
    toCity: '',
    departureDate: '',
    returnDate: '',
    travellers: '',
    class: '',
    tripType: ''
  };

  fl: IFlights[];
  flightList: Array<IFlights> = [];
  flightListRound: Array<IFlights> = [];
  time: {
    hours: string;
    min: string;
  };
  timeArray = [];
  roundTrip = '';
  roundTripBool: boolean;
  selectedDeparture: IFlights;
  selectedArrival: IFlights;
  totalFare: number;
  departureAndArrivalid = '';
  passengerDetails = {
    fullName: '',
    gender: 'Male',
    address: '',
    mobile: 0
  };

  profile: IProfile;


  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService, private route: ActivatedRoute,
              private router: Router, private profileService: ProfiledataService) { }

  ngOnInit() {
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        if (this.roundTrip === 'false') {
          this.roundTripBool = false;
        } else {
          this.roundTripBool = true;
        }
        this.filterData();
      }
    );

    this.sub = this.route.paramMap.subscribe(
      params => {
        this.to = params.get('to');
        this.from = params.get('from');
        this.roundTrip = params.get('roundtrip');
        this.travellers = params.get('travellers');
        console.log(this.from + ' ' + this.to + ' ' + this.roundTrip );
      }
    );
    console.log(this.lmao);

    this.profileService.getProfileById(localStorage.getItem('email'))
      .subscribe((profile: IProfile) => {
      console.log(profile);
      this.profile = profile;
    });
    this.passengerDetails.fullName = this.profile.fullName;
    this.passengerDetails.address = this.profile.address;
    this.passengerDetails.gender = this.profile.gender;
    this.passengerDetails.mobile = this.profile.mobile;
  }

  filterData() {
    this.fl.sort((a: IFlights, b: IFlights) => {
      if (a.price < b.price) {
         return -1;
      } else if (a.price > b.price) {
         return 1;
      } else {
        return 0;
      }
   });
    this.fl.forEach(f => {
      if (f.departureName === this.from && f.arrivalName === this.to) {
        this.flightList.push(f);
        this.flightList.sort((a: IFlights, b: IFlights) => {
           if (a.price < b.price) {
              return -1;
           } else if (a.price > b.price) {
              return 1;
           } else {
             return 0;
           }
        });
        console.log(this.flightList);
      } else if (f.arrivalName === this.from && f.departureName === this.to) {
        this.flightListRound.push(f);
        console.log(this.flightListRound);
      }
    });
  }

  departureRadioChange(selectedDepartureid: string) {
    console.log('departureid = ' + selectedDepartureid);
    this.findSelectedDeparture(selectedDepartureid);
  }

  arrivalRadioChange(selectedArrivalid: string) {
    console.log('arrivalid = ' + selectedArrivalid);
    this.findSelectedArrival(selectedArrivalid);
    this.findTotalFare();
  }

  findSelectedDeparture(id: string) {
    console.log(id);
    this.departureAndArrivalid += id;
    console.log(this.departureAndArrivalid);
    this.fl.forEach(f => {

      if (f.id === id) {
        console.log(f);
        this.selectedDeparture = f;
        console.log(this.selectedDeparture);
      }
    });
    console.log(this.selectedDeparture);
  }

  findSelectedArrival(id: string) {
    this.departureAndArrivalid += ':' + id;
    console.log(this.departureAndArrivalid);
    this.fl.forEach(f => {
      if (f.id === id) {
        this.selectedArrival = f;
      }
    });
    console.log(this.selectedArrival);
  }

  findTotalFare() {
    console.log(this.selectedDeparture.id);
    console.log(this.selectedArrival.id);
    console.log('selectedDeparturePrice =  ' + this.selectedDeparture.price);
    console.log('selectedArrivalPrice =  ' + this.selectedArrival.price);
    this.totalFare = this.selectedDeparture.price + this.selectedArrival.price;
  }

  routeToReviewOneWay(id: string) {
    console.log(this.passengerDetails.fullName);
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') !== null) {
      console.log('djsvfgds');
      this.router.navigate(['/reviewBooking', this.passengerDetails.fullName,
      this.passengerDetails.address, this.passengerDetails.mobile, id]);
    } else {
      console.log('In Else');
      this.router.navigate(['passengerDetails', id]);
    }
  }

  routeToReviewRound() {
    // [routerLink]="['/reviewBooking', departureAndArrivalid]"
    if (localStorage.getItem('username') !== null) {
      this.router.navigate(['/reviewBooking', this.passengerDetails.fullName,
      this.passengerDetails.address, this.passengerDetails.mobile, this.departureAndArrivalid]);
    } else {
      console.log('In Else');
      this.router.navigate(['passengerDetails', this.departureAndArrivalid]);
    }
  }
  customFunc(e: string) {
    console.log(this.buttonClicked);
    this.buttonClicked = true;
    console.log(this.buttonClicked);
    this.pushNewValues();
    // this.ngOnInit();
  }

  pushNewValues() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        this.to = params.get('to');
        this.selectedDetails.toCity = params.get('to');
        this.from = params.get('from');
        this.selectedDetails.fromCity = params.get('from');
        this.roundTrip = params.get('roundtrip');
        this.travellers = params.get('travellers');
        this.selectedDetails.travellers = params.get('travellers');
        console.log('travellers = ' + this.travellers);
        console.log(this.from + ' ' + this.to + ' ' + this.roundTrip );
      }
    );
    console.log('from = ' + this.from);
    console.log('to = ' + this.to);
    this.flightList = [];
    console.log(this.flightList);
    this.filterData();
  }

  getTraveller(e: any) {
    this.selectedDetails.travellers = e.target.value;
  }
}
