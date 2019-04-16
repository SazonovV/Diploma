import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '../services/http.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  entryComponents: [ RegisterComponent, LoginComponent],
  exports: [HeaderComponent],
  providers: [HttpService]
})
export class SharedModule { }
