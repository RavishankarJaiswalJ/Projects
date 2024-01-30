import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServicesComponent } from './self-services.component';

describe('SelfServicesComponent', () => {
  let component: SelfServicesComponent;
  let fixture: ComponentFixture<SelfServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfServicesComponent]
    });
    fixture = TestBed.createComponent(SelfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
