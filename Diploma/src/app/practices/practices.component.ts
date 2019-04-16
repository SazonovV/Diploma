import { Component, OnInit } from '@angular/core';
import { Practice } from '../Interface/practice';
import { Train } from '../Interface/train';
import { HttpService } from '../services/http.service';

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
  private practiceActive: Practice;
  displayedPracticesColumns: string[] = ['name'];
  displayedExercisesColumns: string[] = ['No', 'exercise', 'try', 'rep'];

  constructor( private httpService: HttpService ) {}

  ngOnInit() {
    this.httpService.getUserExercises().subscribe((data: Practice[]) => this.practices = data);
    this.practiceActive = {id: ''};
  }
  exerciseFromTrain(obj: Practice) {
    this.exerciseStatus = true;
    this.practiceActive = obj;
    this.httpService.getExercisesFromPractise(this.practiceActive.id).subscribe((data: Train[]) => this.exercises = data);
  }


}
