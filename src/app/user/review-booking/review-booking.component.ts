import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.css']
})
export class ReviewBookingComponent implements OnInit {

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
      fromCity = '';
      toCity = '';
    id = '';
    idArray = [];
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
              this.id = params.get('id');
              console.log(this.id);
              this.idArray = this.id.split(':');
              console.log(this.idArray);
              if (this.idArray.length > 1) {
                this.fromCity = this.idArray[0];
                this.toCity = this.idArray[1];
              }
            }
          );
          this.filterData();
        }
      );
    }
    filterData() {
      console.log('In filter');
      this.fl.forEach( f => {
        if (f.id === this.fromCity || f.id === this.toCity) {
          this.flightList.push(f);
          console.log(this.flightList);
        }
      });
  }
}
