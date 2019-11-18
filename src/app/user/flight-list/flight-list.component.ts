import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';
import { ActivatedRoute } from '@angular/router';
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


  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService, private route: ActivatedRoute) { }

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
      if (f.departureName === this.from && f.arrivalName === this.to) {
        console.log(f);
        this.flightList.push(f);
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

      if ( f.id === id) {
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
      if ( f.id === id) {
        this.selectedArrival = f;
      }
    });
    console.log(this.selectedArrival);
  }

  findTotalFare() {
    console.log(this.selectedDeparture.id);
    console.log(this.selectedArrival.id);
    this.totalFare = this.selectedDeparture.price + this.selectedDeparture.price;
  }
}