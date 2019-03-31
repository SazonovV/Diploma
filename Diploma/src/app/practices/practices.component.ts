import { Component, OnInit } from '@angular/core';
import { Practice } from '../Interface/practice';
import { Train } from '../Interface/train';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.less'],
  providers: [HttpService]
})
export class PracticesComponent implements OnInit {
  private practices: Practice[];
  private exercises: Train[];
  private exerciseStatus: boolean;
  private practice: Practice;

  constructor( private httpService: HttpService ) {}

  ngOnInit() {
    this.httpService.getAll().subscribe((data: Practice[]) => this.practices = data);
  }
  exerciseFromTrain(obj: Practice) {
    this.exerciseStatus = true;
    this.practice = obj;
    this.httpService.getExercisesFromPractise(this.practice.id).subscribe((data: Train[]) => this.exercises = data);
  }


}
