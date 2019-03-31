import { Component, OnInit } from '@angular/core';
import {IProfile} from '../../assets/i-profile';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Profile } from '../Interface/profile';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

// interface IProfile {
//   id: string;
//   name: string;
//   surname: string;
//   age: number;
//   gender: string;
//   phoneNumber?: string;
//   email: string;
//   students: string[];
// }



export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private profile: Profile;
  private status: boolean;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.profile = {
      id: '1',
      name: 'Vlad',
      surname: 'Sazonov',
      age: 20,
      phoneNumber: '8-985-971-17-42',
      email: 'sazvlad1@gmail.com',
    };
    this.status = true;


  }

  initForm() {
    this.profileForm = this.fb.group({
      name: ['',
      Validators.required],
      // surname: [''],
      // age: [20],
      // phoneNumber: [''],
      email: ['',
      Validators.email]
    });
  }

}
