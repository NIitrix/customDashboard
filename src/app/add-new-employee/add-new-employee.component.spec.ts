import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmployeeComponent } from './add-new-employee.component';

describe('AddNewEmployedComponent', () => {
  let component: AddNewEmployeeComponent;
  let fixture: ComponentFixture<AddNewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
