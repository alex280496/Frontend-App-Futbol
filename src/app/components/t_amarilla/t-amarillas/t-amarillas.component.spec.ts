import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAmarillasComponent } from './t-amarillas.component';

describe('TAmarillasComponent', () => {
  let component: TAmarillasComponent;
  let fixture: ComponentFixture<TAmarillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAmarillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAmarillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
