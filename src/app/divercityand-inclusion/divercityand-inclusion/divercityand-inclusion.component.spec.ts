import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivercityandInclusionComponent } from './divercityand-inclusion.component';

describe('DivercityandInclusionComponent', () => {
  let component: DivercityandInclusionComponent;
  let fixture: ComponentFixture<DivercityandInclusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivercityandInclusionComponent]
    });
    fixture = TestBed.createComponent(DivercityandInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
