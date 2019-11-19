import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/model/IProfile';
import { ProfiledataService } from 'src/app/service/profiledata.service';
<<<<<<< HEAD
=======
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
>>>>>>> d30d0939c6968998fb87f935af1f9888ebd5f0c6

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  profile: IProfile;

  fullName = '';
    id = '';
    password = '';
    gender = '';
    dob = '';
    address = '';
    city = '';
    state = '';
    country = '';
    pincode = 0;
    mobile = 0;
<<<<<<< HEAD

    // tslint:disable-next-line: variable-name
    address_value: boolean = false;
    city_value: boolean = false;
    state_value: boolean = false;
    country_value: boolean = false;
    mobile_value: boolean = false;
    add: string = '+Add';

  constructor(private profileService: ProfiledataService) { }

  ngOnInit() {

    this.profileService.getProfileById(this.id).subscribe((profile: IProfile) => {
        console.log(profile);
        this.profile = profile;
        console.log(this.profile);
        this.fullName = this.profile.fullName;
        this.dob = this.profile.dob;
        this.id = this.profile.id;
        this.gender = this.profile.gender;

        this.mobile = this.profile.mobile;
        this.address = this.profile.address;
        this.state = this.profile.state;
        this.city = this.profile.city;
        this.country = this.profile.country;


        if (this.mobile !== null)
        {
          this.mobile_value = true;
        }
        if (this.address !== '')
        {
          console.log(this.address_value);
          this.address_value = true;
        }
        if (this.state !== '')
        {
          this.state_value = true;
        }
        if (this.country !== '')
        {
          this.country_value = true;
        }
        if (this.city !== '')
        {
          this.city_value = true;
        }
        console.log(this.mobile_value);

  });
  }
}
=======
    sub: Subscription;

    // tslint:disable-next-line: variable-name
    address_value = false;
    // tslint:disable-next-line: variable-name
    city_value = false;
    // tslint:disable-next-line: variable-name
    state_value = false;
    // tslint:disable-next-line: variable-name
    country_value = false;
    // tslint:disable-next-line: variable-name
    mobile_value = false;
    add = '+Add';
    email: string;

  constructor(private profileService: ProfiledataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.paramMap.subscribe(
      params => {
        this.email = params.get('email');
        console.log(this.email);
      }
    );
    this.profileService.getProfileById(this.email).subscribe((profile: IProfile) => {
      console.log(profile);
      this.profile = profile;
      console.log(this.profile);
      this.fullName = this.profile.fullName;
      this.dob = this.profile.dob;
      this.id = this.profile.id;
      this.gender = this.profile.gender;
      this.mobile = this.profile.mobile;
      this.address = this.profile.address;
      this.state = this.profile.state;
      this.city = this.profile.city;
      this.country = this.profile.country;

      if (this.mobile !== null) {
          this.mobile_value = true;
      }
      if (this.address !== '') {
          console.log(this.address_value);
          this.address_value = true;
      }
      if (this.state !== '') {
          this.state_value = true;
      }
      if (this.country !== '') {
          this.country_value = true;
      }
      if (this.city !== '') {
          this.city_value = true;
      }
      console.log(this.mobile_value);
  });
  }
}
>>>>>>> d30d0939c6968998fb87f935af1f9888ebd5f0c6
