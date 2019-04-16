import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticesComponent } from './practices.component';
import {SharedModule} from '../shared/shared.module';
import {PracticesRoutingModule} from './practices-routing.module';
import {MatTableModule} from '@angular/material';
import {AddNewPracticeComponent} from './add-new-practice/add-new-practice.component';

@NgModule({
  declarations: [PracticesComponent, AddNewPracticeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PracticesRoutingModule,
    MatTableModule
  ],
  exports: [PracticesComponent],
  entryComponents: [ AddNewPracticeComponent ],
})
export class PracticesModule { }
