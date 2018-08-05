import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteAccidentComponent } from './dialog-confirm-delete-accident.component';

describe('DialogConfirmDeleteAccidentComponent', () => {
  let component: DialogConfirmDeleteAccidentComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmDeleteAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmDeleteAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
