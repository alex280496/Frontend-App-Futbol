import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAmarillaEditComponent } from './t-amarilla-edit.component';

describe('TAmarillaEditComponent', () => {
  let component: TAmarillaEditComponent;
  let fixture: ComponentFixture<TAmarillaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAmarillaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAmarillaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
