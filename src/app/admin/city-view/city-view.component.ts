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
cityname: string;
_newName: string;
_newCode: string;
cityid: string;
cities: ICity[];
errormessage = 'please correct the validation error';
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
private cityservice: CitydataService, private router: Router
) { }

ngOnInit() {
this.cityservice.getCityData().subscribe((cities: ICity[]) => {
this.cities = cities;
console.log('lool');
console.log(this.cities);
});
}
postCityData(id: string, cityName: string) {
this.city.cityName = cityName;
this.city.id = id;
console.log(this.city.cityName);
console.log(this.city.id);
this.cityservice.postCityData(this.city).subscribe((city: ICity) => console.log(city));
setTimeout(() => location.reload(), 2000);
// this.router.navigate(['/airlinelist']);
confirm('do you really want change');
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
console.log('lll');
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
EditCity(cityName: string , id: string) {
this.cityname = cityName;
this.city.cityName = cityName;
this.city.id = id;
console.log( this.city.cityName);
console.log(this.city.id);

}
saveCity(): void {
  this.cityservice.updateCity(this.city.id, this.city)
.subscribe((data) => {
console.log(data);
this.cityname = data.cityName;
this.cityid = data.id;
setTimeout(() => location.reload(), 2000);
// this.router.navigate(['/airlinelist']);
confirm('do you really want change');
});

}



}
