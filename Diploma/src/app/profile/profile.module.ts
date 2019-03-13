import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import {IProfile} from '../../assets/i-profile';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
