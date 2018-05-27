import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionComponenteComponent } from './configuracion-componente.component';

describe('ConfiguracionComponenteComponent', () => {
  let component: ConfiguracionComponenteComponent;
  let fixture: ComponentFixture<ConfiguracionComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
