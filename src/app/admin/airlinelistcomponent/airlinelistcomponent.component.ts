import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute } from '@angular/router';
import {UniquePipe } from 'src/app/unique.pipe';
@Component({
  selector: 'app-airlinelistcomponent',
  templateUrl: './airlinelistcomponent.component.html',
  styleUrls: ['./airlinelistcomponent.component.css']
})
export class AirlinelistcomponentComponent implements OnInit {
  private sub: Subscription;
  fl: IFlights[];
  // tslint:disable-next-line: ban-types
  flightList: Array<String> = [];
  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
       // this.flightList = [...new Set(this.fl.map(fname => fname.flightCompany ))];
        console.log(this.fl);
      });
      }
  }


