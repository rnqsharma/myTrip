import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControlName } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProfile } from 'src/app/model/IProfile';
import { ProfiledataService } from 'src/app/service/profiledata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorMessage: string;
  profileForm: FormGroup;
  email: string = 'rnqsharma3@gmail.com';
  profile: IProfile;
  private sub: Subscription;

  logo = 'assets/images/airplane.jpg';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfiledataService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: [''],
      email: [''],
      password: [''],
      gender: [''],
      dob: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      pincode: [''],
      mobile: [''],
    });



    this.profileService.getProfileById('rnqsharma3@gmail.com').
      subscribe((profile: IProfile) => {
        console.log(profile);
        this.profile = profile;
        this.profileForm.patchValue({

          fullName: this.profile.fullName,
          email: this.profile.id,
          password: this.profile.password,
          gender: this.profile.gender,
          dob: this.profile.dob,
          address: this.profile.address,
          city: this.profile.city,
          state: this.profile.state,
          country: this.profile.country,
          pincode: this.profile.pincode,
          mobile: this.profile.mobile
        });
      });
  }
  saveProfile = (): void => {
    const p = { ...this.profile, ...this.profileForm.value };
    console.log(p);
    console.log(this.email);
    this.updateProfile(p, this.email);
    console.log("sgf")
  }
  updateProfile(profile: IProfile, id: string): void {
    this.profileService.updateProfile(profile, id)
      .subscribe({
        next: () => this.onSaveComplete(),
        error: err => this.errorMessage = err
      });
  }
  onSaveComplete(): void {
    // Reset the form to clear the flags
    //this.profileForm.reset();
    //  this.router.navigate(['/viewprofile']);
  }
}

