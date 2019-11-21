import { Component, OnInit, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControlName, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { Subscription, Observable, fromEvent, merge } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { AirlinedataService } from 'src/app/service/airlinedata.service';
import { IAirline } from 'src/app/model/IAirline';
import { CitydataService } from 'src/app/service/citydata.service';
import { ICity } from 'src/app/model/ICity';
import { GenericValidator } from 'src/app/validator/generic-validator';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-addnewflight',
  templateUrl: './addnewflight.component.html',
  styleUrls: ['./addnewflight.component.css']
})
export class AddnewflightComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];


  flightForm: FormGroup;
  private sub: Subscription;
  id: string;
  flightData: IFlights;
  airlines: IAirline[];
  airLineName: string;
  // airlinesName: Array<string> = [];
  cities: ICity[];
  cityName: string;
  flight: IFlights;
  errorMessage: string;
  dist = '';

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightdataService,
    private airlineservice: AirlinedataService,
    private cityservice: CitydataService
  ) {
    this.validationMessages = {
      id: {
        required: 'Product name is required.',
        // minlength: 'Product name must be at least three characters.',
        // maxlength: 'Product name cannot exceed 50 characters.'
      },
      flightCompany: {
        required: 'Product code is required.'
      },
      departureName: {
        required: 'Product code is required.'
      },
      departureTime: {
        required: 'Product code is required.'
      },
      arrivalName: {
        required: 'Product code is required.'
      },
      arrivalTime: {
        required: 'Product code is required.'
      },
      price: {
        required: 'Product code is required.'
      },
      duration: {
        required: 'Product code is required.'
      },
      economy: {
        required: 'Product code is required.'
      },
      business: {
        required: 'Product code is required.'
      },
      distance: {
        required: 'Product code is required.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {

    this.sub = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('flightID');
      }
    );

    // this.productForm = this.fb.group({
    //   productName: [''],
    //   productCode: ['', Validators.required],
    //   starRating: ['', NumberValidators.range(1, 5)],
    //   tags: this.fb.array([]),
    //   description: ''
    //   });
    this.flightForm = this.fb.group({
      id: ['', Validators.required],
      flightCompany: ['', Validators.required],
      departureName: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalName: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', Validators.required],
      economy: ['', Validators.required],
      business: ['', Validators.required],
      distance: ['', Validators.required],
    });
    this.airlineservice.getAirlinesData().subscribe((airlines: IAirline[]) => {
      this.airlines = airlines;
      // console.log(this.airlines);

      this.cityservice.getCityData().subscribe((cities: ICity[]) => {
        this.cities = cities;
        // console.log(this.cities);


        if (this.id !== '0') {
          this.flightForm.get('distance').setValidators([
            Validators.required
          ])
          // this.flightForm.controls['distance'].setValidators([Validators.required]);
          this.flightForm.controls['id'].disable();
          this.flightForm.controls['flightCompany'].disable();
          this.flightService.getFlightsDataByID(this.id).
            subscribe((flight: IFlights) => {
              console.log(flight);
              this.flight = flight;
              this.flightForm.patchValue({
                id: this.flight.id,
                flightCompany: this.flight.flightCompany,
                departureName: this.flight.departureName,
                departureTime: this.flight.departureTime,
                arrivalName: this.flight.arrivalName,
                arrivalTime: this.flight.arrivalTime,
                price: this.flight.price,
                duration: this.flight.duration,
                economy: this.flight.economy,
                business: this.flight.business,
                // distance: this.flight.,
              });
              console.log('flightForm is working' + this.flightForm.value.id);
            });
        }
      });
    });

  }


  ngAfterViewInit(): void {
    console.log('In After')
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.flightForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.flightForm);
    });
  }

 

  addflight = (): void => {
    this.setPrice();
    const p = { ...this.flight, ...this.flightForm.value };
    console.log('p.id is working' + this.id);
    if (this.id === '0') {
      console.log('createNew is working');
      this.flightService.createFlight(p)
        .subscribe({
          next: () => this.onSaveComplete(),
          error: err => this.errorMessage = err
        });
    } else {
      console.log('update is working');
      this.updateProfile(p, this.id);
    }
  }

  disable() {
    if (this.flightForm.valid || this.id === '0'){
      return false;
    } else {
      return true;
    }
  }

  updateProfile(flight: IFlights, id: string): void {
    this.flightService.updateProfile(flight, id)
      .subscribe({
        next: () => this.onSaveComplete(),
        error: err => this.errorMessage = err
      });
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.flightForm.reset();
    this.router.navigate(['/adminFlight']);
  }

  setPrice() {
    const distance = +this.dist;
    let price: number;
    if (distance < 500) {
      price = distance * 120;
    } else if (distance > 500 && distance < 1001) {
      price = distance * 70;
    } else if (distance > 1000) {
      price = distance * 50;
    }
    console.log('price = ' + price);
    this.flightForm.value.price = price;
  }

  getDistance(dist: string) {
    this.dist = dist;
    console.log(dist);
  }
}
