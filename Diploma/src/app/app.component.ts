import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';
import {Practice} from './Interface/practice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})


export class AppComponent implements OnInit {
  private practices: Practice[];

  constructor(private http: HttpClient) {}

  title = 'Фитнес помошник';


  ngOnInit() {

  }
}
