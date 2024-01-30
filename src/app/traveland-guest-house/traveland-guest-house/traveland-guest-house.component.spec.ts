import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelandGuestHouseComponent } from './traveland-guest-house.component';

describe('TravelandGuestHouseComponent', () => {
  let component: TravelandGuestHouseComponent;
  let fixture: ComponentFixture<TravelandGuestHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelandGuestHouseComponent]
    });
    fixture = TestBed.createComponent(TravelandGuestHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
