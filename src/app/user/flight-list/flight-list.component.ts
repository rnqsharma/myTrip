import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
  flightID = '';
        flightCompany: string;
        departureName: string;
        departureTime: string;
        arrivalName: string;
        arrivalTime: string;
        price: number;
        duration: string;
        hours: string;
        mins: string;
  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.to = params.get('to');
            this.from = params.get('from');
          }

        );
        console.log(this.to);
        console.log(this.from);
        this.filterData();
      }
      
    );
  }

  filterData() {
    console.log("In filter");
    this.fl.forEach( f => {
      // console.log(f);
      if (f.departureName === this.from) {
        this.flightList.push(f);
        console.log(this.flightList);
        // this.timeArray.push(this.time);
        // console.log(this.price);
      }
    });
  }


}
