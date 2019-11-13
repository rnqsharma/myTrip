import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewflightComponent } from './addnewflight.component';

describe('AddnewflightComponent', () => {
  let component: AddnewflightComponent;
  let fixture: ComponentFixture<AddnewflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
