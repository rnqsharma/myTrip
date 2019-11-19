import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlightlistComponent } from './admin-flightlist.component';

describe('AdminFlightlistComponent', () => {
  let component: AdminFlightlistComponent;
  let fixture: ComponentFixture<AdminFlightlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFlightlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFlightlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
