import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/model/ICity';
import { CitydataService } from 'src/app/service/citydata.service';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {
  cities: ICity[];
  cityData: ICity = {
    cityName: '',
    id: ''
  };

  constructor(
    private cityservice: CitydataService
  ) { }

  ngOnInit() {
    this.cityservice.getCityData().subscribe((cities: ICity[]) => {
      this.cities = cities;
      console.log('lool');
      console.log(this.cities);
  });
}
postCityData(cityName: string, id: string) {
  this.cityData.cityName = cityName;
  this.cityData.id = id;
  console.log(this.cityData.cityName);
  console.log(this.cityData.id);
  
  this.cityservice.postCityData(this.cityData).subscribe((city: ICity) => console.log(city));

}
}