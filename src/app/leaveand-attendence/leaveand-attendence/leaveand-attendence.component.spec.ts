import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveandAttendenceComponent } from './leaveand-attendence.component';

describe('LeaveandAttendenceComponent', () => {
  let component: LeaveandAttendenceComponent;
  let fixture: ComponentFixture<LeaveandAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveandAttendenceComponent]
    });
    fixture = TestBed.createComponent(LeaveandAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
