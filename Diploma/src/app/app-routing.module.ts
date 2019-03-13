import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import {AppModule} from './app.module';
import {ProfileComponent} from './profile/profile.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: '', component: HeaderComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
