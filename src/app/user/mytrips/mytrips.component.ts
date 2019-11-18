import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProfile } from 'src/app/model/IProfile';
import { ProfiledataService } from 'src/app/service/profiledata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  // email = '';
  // profile: IProfile;
  // private sub: Subscription;
  // bookedFlights: Array<IProfile> = [];
  //   // tslint:disable-next-line: variable-name
  //   constructor(private _bookedflightsData: ProfiledataService,
  //               private route: ActivatedRoute) { }
  //   ngOnInit() {
  //     this._bookedflightsData.getProfileById(this.email).subscribe(
  //       (profile: IProfile) => {
  //         this.profile = profile;
  //         console.log(this.profile);
  //         this.sub = this.route.paramMap.subscribe(
  //           params => {
  //             this.email = params.get('email');
  //             console.log(this.email);
  //           }
  //         );
  //         // this.profile = profile;
  //         // console.log(profile);
  //         this.filterData();
  //       }
  //     );

  //     }
  //     filterData() {
  //       console.log('In filter');

  //       if (this.profile.id === this.email) {
  //           console.log('sfd');
  //           this.bookedFlights.push(this.profile);

  //           console.log(this.bookedFlights);

  //       }

  // }



  email: '';
  private sub: Subscription;
    profiles: IProfile[];
    bList: IProfile;
    bArray= [{}];
    // tslint:disable-next-line: variable-name
    constructor(private _profileData: ProfiledataService,
                private route: ActivatedRoute) { }
    ngOnInit() {
      this._profileData.getProfileData().subscribe(
        (profiles: IProfile[]) => {
          this.profiles = profiles;
          this.sub = this.route.paramMap.subscribe(
            params => {
              this.profiles.email = params.get('email');
              console.log(this.profiles.email);
              console.log(this.profiles);
            }
          );
          this.filterData();
        }
      );
    }
     filterData() {
      console.log('In filter');
      this.profiles.forEach( p => {
       if (this.profiles.email === p.id) {
     console.log('sfd');
     this.bList = p;
     console.log(this.bList);
    // this.bList.forEach()
     this.bArray = this.bList.bookedFlights;
     console.log(this.bArray);

    }
    });


  }

}
