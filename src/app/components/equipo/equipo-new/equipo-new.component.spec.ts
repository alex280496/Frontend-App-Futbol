import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoNewComponent } from './equipo-new.component';

describe('EquipoNewComponent', () => {
  let component: EquipoNewComponent;
  let fixture: ComponentFixture<EquipoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
