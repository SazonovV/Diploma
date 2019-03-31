import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticesComponent } from './practices.component';
import {SharedModule} from '../shared/shared.module';
import {PracticesRoutingModule} from './practices-routing.module';

@NgModule({
  declarations: [PracticesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PracticesRoutingModule
  ],
  exports: [PracticesComponent]
})
export class PracticesModule { }
