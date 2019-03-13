import { Component, OnInit } from '@angular/core';
import {IProfile} from '../../assets/i-profile';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


let profile: IProfile;
let status: boolean;

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

  status = true;
  profile = {
    id: '1',
    name: 'Vlad',
    surname: 'Sazonov',
    age: 20,
    phoneNumber: '89859711742',
    email: 'sazvlad1@gmail.com',
  };
  private surname: string[];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
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
