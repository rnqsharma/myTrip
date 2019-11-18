import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripsComponent } from './mytrips.component';

describe('MytripsComponent', () => {
  let component: MytripsComponent;
  let fixture: ComponentFixture<MytripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
