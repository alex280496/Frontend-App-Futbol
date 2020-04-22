import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrajeNewComponent } from './arbitraje-new.component';

describe('ArbitrajeNewComponent', () => {
  let component: ArbitrajeNewComponent;
  let fixture: ComponentFixture<ArbitrajeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitrajeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrajeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
