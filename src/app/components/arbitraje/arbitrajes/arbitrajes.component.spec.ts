import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrajesComponent } from './arbitrajes.component';

describe('ArbitrajesComponent', () => {
  let component: ArbitrajesComponent;
  let fixture: ComponentFixture<ArbitrajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitrajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
