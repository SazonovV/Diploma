import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Register} from 'ts-node';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(RegisterComponent);
  }
  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }

}
