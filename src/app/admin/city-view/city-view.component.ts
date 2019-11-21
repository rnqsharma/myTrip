import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/model/ICity';
import { CitydataService } from 'src/app/service/citydata.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {
  cityname: string;
  _newName: string;
  _newCode: string;
  cityid: string;
  cityForm: FormGroup;
  cities: ICity[];
  errormessage = "please correct the validation error";
  city: ICity = {
    cityName: '',
    id: ''
  };
  set newName(newValue: string) {
    this.city.cityName = newValue;
  }
  // tslint:disable-next-line: variable-name
  set newCode(newValue: string) {
    this.city.id = newValue;
  }

  constructor(
    private cityservice: CitydataService, private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cityservice.getCityData().subscribe((cities: ICity[]) => {
      this.cities = cities;
      console.log('lool');
      console.log(this.cities);
    });

    this.cityForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  postCityData(cityName: string, id: string) {
    this.city.cityName = cityName;
    this.city.id = id;
    console.log(this.city.cityName);
    console.log(this.city.id);
    this.cityservice.postCityData(this.city).subscribe((city: ICity) => console.log(city));
    setTimeout(() => location.reload(), 2000);
    // this.router.navigate(['/airlinelist']);
    confirm("You are about to add new City");
  }

  deleteCity(id: string): void {
    console.log(id);
    this.city.id = id;
    // this.deleteFeedback();
    if (confirm(`Delete this City?`)) {
      this.cityservice.deleteCityByID(id)
        .subscribe(() => {
          this.router.navigate(['/cityList']);
          // error: err => this.errorMessage = err;
          this.deleteFeedback();
        });
    }
  }

  deleteFeedback() {
    // this.idFeed = feedID;
    console.log("lll");
    this.cities.forEach(c => {
      if (c.id === this.city.id) {
        this.deleteByAttr(this.cities, 'id', this.city.id);
      }
    });
    console.log(this.cities);
    // this.updateCustomer();
  }

  disableCounter(): boolean {
    if (this.cityForm.valid) {
      return false;
    }
    return true;
  }


  deleteByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
      if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {

        arr.splice(i, 1);

      }
    }
    return arr;
  }
  EditCity(cityName: string, id: string) {
    this.cityname = cityName;
    this.city.cityName = cityName;
    this.cityid = id;
    console.log(this.cityname);
    console.log(this.cityid);

  }
  saveCity(): void {
    this.cityservice.updateCity(this.city, this.cityid)
      .subscribe((data) => {
        console.log(data);
        this.cityname = data.cityName;
        this.cityid = data.id;
        setTimeout(() => location.reload(), 2000);
        // this.router.navigate(['/airlinelist']);
        confirm("Update This City");
      });

  }



}