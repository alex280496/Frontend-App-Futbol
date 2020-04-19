import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorShowComponent } from './jugador-show.component';

describe('JugadorShowComponent', () => {
  let component: JugadorShowComponent;
  let fixture: ComponentFixture<JugadorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
