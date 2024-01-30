import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorporateServicesComponent } from './coorporate-services.component';

describe('CoorporateServicesComponent', () => {
  let component: CoorporateServicesComponent;
  let fixture: ComponentFixture<CoorporateServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoorporateServicesComponent]
    });
    fixture = TestBed.createComponent(CoorporateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
