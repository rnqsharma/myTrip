import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/model/ICity';
import { CitydataService } from 'src/app/service/citydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {
  cities: ICity[];
  city: ICity = {
    cityName: '',
    id: ''
  }

  constructor(
    private cityservice: CitydataService, private router: Router
  ) { }

  ngOnInit() {
    this.cityservice.getCityData().subscribe((cities: ICity[]) => {
      this.cities = cities;
      console.log('lool');
      console.log(this.cities);
    });
  }

  deleteCity(id: string): void {
    console.log(id);
    this.city.id = id;
    // this.deleteFeedback();
    if (confirm(`Really delete this topic?`)) {
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


  deleteByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
      if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {

        arr.splice(i, 1);

      }
    }
    return arr;
  }


}
