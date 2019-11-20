import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/service/paypal.service';
import { IDetails } from 'src/app/model/IDetails';
declare let paypal: any;
@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.css']
})


export class ReviewBookingComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

    to = '';
    from = '';
    totalPrice = 0;
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
         
        
           
          details: IDetails = {
            quantity: 0,
            price: 0
          }

          addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AbIQl023LqhvpvogwSR8IKId-gUIWtroWu6d545aIWszcB4F124q6GjUfG6gwzhNxWB4NtlFs-ZPJqoV',
      production: 'EGADUeZWgLQnr6CrBbkMOAILxz6CCKa98CUVJ9WlkP2Xipk0GQVsgNTiB-M7K7SJ_bg8QfXq6K-QLACy'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

    
          // quantity = req.body.Quantity;
          // purchaseName = "Single Squatch Habitat";
          // purchasePrice = 10.00;
          // taxPrice = 0;
          // shippingPrice = 0;
          // description = "Single Habitat Sasquatch Starter Kit";


    // tslint:disable-next-line: variable-name
    constructor(private _flightsData: FlightdataService,
                private route: ActivatedRoute, private paypalService: PaypalService) { }
    ngOnInit() {
      this._flightsData.getFlightsData().subscribe(
        (flights: IFlights[]) => {
          this.fl = flights;
          this.sub = this.route.paramMap.subscribe(
            params => {
              this.id = params.get('flightID');
              console.log(this.id);
              this.idArray = this.id.split(':');
              console.log(this.idArray);
              if (this.idArray.length > 1) {
                this.fromCity = this.idArray[0];
                this.toCity = this.idArray[1];
                this.paypalService.payPal(this.details);
              } else {
                this.fromCity = this.idArray[0];
                this.paypalService.payPal(this.details);
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
        console.log(f);
        if (f.id === this.fromCity || f.id === this.toCity) {
          console.log('sfd');
          this.flightList.push(f);
          this.totalPrice += f.price;
          console.log(this.flightList);
        }
        
      });
    }

    payment() : void{

      if (this.idArray.length > 1) {
        this.details.price = 10000;
        this.details.quantity = 2;
      } else {
        this.details.price = 10000;
        this.details.quantity = 1;
      }
  
      //this.paypalService.payPal(this.details).subscribe((response:Response)=>console.log("paypal response ****** "+response.status));
    }

  
  
  
  addPaypalScript(): Promise<any> {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  

 
}

