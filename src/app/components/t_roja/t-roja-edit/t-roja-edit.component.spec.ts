import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRojaEditComponent } from './t-roja-edit.component';

describe('TRojaEditComponent', () => {
  let component: TRojaEditComponent;
  let fixture: ComponentFixture<TRojaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRojaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRojaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
