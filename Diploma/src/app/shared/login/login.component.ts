import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Register} from 'ts-node';
import {Login} from '../../Interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Login) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(user: Login): void {
    console.log(user);
    this.httpService.postLogin(user).subscribe();
  }
}
