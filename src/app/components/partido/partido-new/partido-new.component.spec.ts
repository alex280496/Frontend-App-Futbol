import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoNewComponent } from './partido-new.component';

describe('PartidoNewComponent', () => {
  let component: PartidoNewComponent;
  let fixture: ComponentFixture<PartidoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
