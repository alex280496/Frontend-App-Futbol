import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoShowComponent } from './equipo-show.component';

describe('EquipoShowComponent', () => {
  let component: EquipoShowComponent;
  let fixture: ComponentFixture<EquipoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
