import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAmarillaNewComponent } from './t-amarilla-new.component';

describe('TAmarillaNewComponent', () => {
  let component: TAmarillaNewComponent;
  let fixture: ComponentFixture<TAmarillaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAmarillaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAmarillaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
