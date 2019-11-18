import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditairlineComponent } from './editairline.component';

describe('EditairlineComponent', () => {
  let component: EditairlineComponent;
  let fixture: ComponentFixture<EditairlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditairlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
