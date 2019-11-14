import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-airlinelistcomponent',
  templateUrl: './airlinelistcomponent.component.html',
  styleUrls: ['./airlinelistcomponent.component.css']
})
export class AirlinelistcomponentComponent implements OnInit {

  private sub: Subscription;
  fl: IFlights[];
  flightList: Array<IFlights> = [];
  flightCompany: string;
  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.flightCompany = params.get('flightCompany');
          }
        );
        console.log(this.flightCompany);
      }
    );
  }
}
