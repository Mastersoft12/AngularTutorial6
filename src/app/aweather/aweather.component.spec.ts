import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AweatherComponent } from './aweather.component';

describe('AweatherComponent', () => {
  let component: AweatherComponent;
  let fixture: ComponentFixture<AweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
