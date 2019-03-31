import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://shielded-chamber-25933.herokuapp.com/practices/');
  }
  getExercisesFromPractise(id: string) {
    return this.http.get('https://shielded-chamber-25933.herokuapp.com/practices/' + id + '/contain');
  }
}
