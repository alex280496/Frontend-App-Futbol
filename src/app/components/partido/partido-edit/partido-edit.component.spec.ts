import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoEditComponent } from './partido-edit.component';

describe('PartidoEditComponent', () => {
  let component: PartidoEditComponent;
  let fixture: ComponentFixture<PartidoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
