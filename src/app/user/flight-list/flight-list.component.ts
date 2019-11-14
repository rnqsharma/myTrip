import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { IProfile } from 'src/app/model/IProfile';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  to = '';
  from = '';
  private sub: Subscription;
  fl: IFlights[];
  flightList: Array<IFlights> = [];
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

  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.to = params.get('to');
            this.from = params.get('from');
            this.roundTrip = params.get('roundtrip');
          }
        );
        console.log(this.to);
        console.log(this.from);
        if (this.roundTrip === 'false') {
          this.roundTripBool = false;
        } else {
          this.roundTripBool = true;
        }
        this.filterData();
      }
    );
  }

  filterData() {
    console.log('In filter');
    console.log(this.roundTrip);
    this.fl.forEach(f => {
      console.log(f);
      // console.log(f.arrivalName + ' ' + this.to);
      console.log(f.departureName + ' ' + this.from + ' ' + f.arrivalName + ' ' + this.to);
      if (f.departureName === this.from && f.arrivalName === this.to) {
        console.log(f);
        this.flightList.push(f);
        console.log(this.flightList);
      }
    });
  }

  routeReview(){
    // console.log("fgfdsg");
    // this.router.navigate(['reviewBooking', 'SG-197']);
  }

  departureRadioChange(selectedDepartureFlightID: string) {
    console.log('departureFlightID = ' + selectedDepartureFlightID);
    this.findSelectedDeparture(selectedDepartureFlightID);
  }

  arrivalRadioChange(selectedArrivalFlightID: string) {
    console.log('arrivalFlightID = ' + selectedArrivalFlightID);
    this.findSelectedArrival(selectedArrivalFlightID);
    this.findTotalFare();
  }

  findSelectedDeparture(id: string) {
    console.log(id);
    this.fl.forEach(f => {

      if ( f.flightID === id) {
        console.log(f);
        this.selectedDeparture = f;
        console.log(this.selectedDeparture);
      }
    });
    console.log(this.selectedDeparture);
  }

  findSelectedArrival(id: string) {
    this.fl.forEach(f => {
      if ( f.flightID === id) {
        this.selectedArrival = f;
      }
    });
    console.log(this.selectedArrival);
  }

  findTotalFare() {
    this.totalFare = this.selectedDeparture.price + this.selectedDeparture.price;
  }
}
