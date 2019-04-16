import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Register } from 'ts-node';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService  } from '../../services/http.service';
import { NewUser } from '../../Interface/new-user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });


  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              public dialogRef: MatDialogRef<RegisterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Register) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(user: NewUser): void {
    console.log(user);
    this.httpService.postNewUser(user).subscribe();
  }

}
