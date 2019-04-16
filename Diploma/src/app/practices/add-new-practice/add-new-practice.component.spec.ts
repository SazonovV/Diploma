import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPracticeComponent } from './add-new-practice.component';

describe('AddNewPracticeComponent', () => {
  let component: AddNewPracticeComponent;
  let fixture: ComponentFixture<AddNewPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
