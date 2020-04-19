import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorNewComponent } from './jugador-new.component';

describe('JugadorNewComponent', () => {
  let component: JugadorNewComponent;
  let fixture: ComponentFixture<JugadorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
