import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NewUser } from '../Interface/new-user';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {Login} from '../Interface/login';
import {AuthAnswer} from '../Interface/auth-answer';

const url = 'https://shielded-chamber-25933.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${url}practices/`);
  }
  getExercisesFromPractise(id: string) {
    console.log(localStorage.getItem('token'));
    return this.http.get(`${url}${id}/contain`);
  }
  getUserExercises() {
    console.log(localStorage.getItem('token'), localStorage.getItem('userId'));
    return this.http
      .get(`${url}users/${localStorage.getItem('userId')}/practices`, { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }
  postNewUser(user: NewUser) {
    return this.http.post(`${url}users`, user);
  }
  postLogin(user: Login) {
    return this.http.post(`${url}users/login`, '', { headers: {
      Authorization: 'Basic ' + btoa(`${user.email}:${user.password}`),
      }})
      .pipe(
        tap((answer: AuthAnswer) => console.log(answer)),
        tap((answer: AuthAnswer) => localStorage.setItem('token', answer.token)),
        tap((answer: AuthAnswer) => localStorage.setItem('userId', answer.userId))
      );
  }
}
