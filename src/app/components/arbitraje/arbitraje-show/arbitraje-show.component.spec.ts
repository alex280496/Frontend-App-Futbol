import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrajeShowComponent } from './arbitraje-show.component';

describe('ArbitrajeShowComponent', () => {
  let component: ArbitrajeShowComponent;
  let fixture: ComponentFixture<ArbitrajeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitrajeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrajeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
