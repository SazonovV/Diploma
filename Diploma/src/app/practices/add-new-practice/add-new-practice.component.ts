import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-practice',
  templateUrl: './add-new-practice.component.html',
  styleUrls: ['./add-new-practice.component.less']
})
export class AddNewPracticeComponent implements OnInit {
  private NewPracticeForm = this.fb.group({
    name: ['', Validators.required],
    exercises: [{}]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
