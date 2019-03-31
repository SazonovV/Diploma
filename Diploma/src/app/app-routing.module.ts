import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import {AppModule} from './app.module';
import {ProfileComponent} from './profile/profile.component';
import {AppComponent} from './app.component';
import {PracticesComponent} from './practices/practices.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'trains', loadChildren: './practices/practices.module#PracticesModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
