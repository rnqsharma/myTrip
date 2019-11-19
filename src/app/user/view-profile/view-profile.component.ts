import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/model/IProfile';
import { ProfiledataService } from 'src/app/service/profiledata.service';

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