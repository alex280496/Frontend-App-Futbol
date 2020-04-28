import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRojasComponent } from './t-rojas.component';

describe('TRojasComponent', () => {
  let component: TRojasComponent;
  let fixture: ComponentFixture<TRojasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRojasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
