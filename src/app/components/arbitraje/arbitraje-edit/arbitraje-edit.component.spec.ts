import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrajeEditComponent } from './arbitraje-edit.component';

describe('ArbitrajeEditComponent', () => {
  let component: ArbitrajeEditComponent;
  let fixture: ComponentFixture<ArbitrajeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitrajeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrajeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
