import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBookingComponent } from './review-booking.component';

describe('ReviewBookingComponent', () => {
  let component: ReviewBookingComponent;
  let fixture: ComponentFixture<ReviewBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
