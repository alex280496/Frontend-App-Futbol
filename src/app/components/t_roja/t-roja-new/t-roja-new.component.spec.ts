import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRojaNewComponent } from './t-roja-new.component';

describe('TRojaNewComponent', () => {
  let component: TRojaNewComponent;
  let fixture: ComponentFixture<TRojaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRojaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRojaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
