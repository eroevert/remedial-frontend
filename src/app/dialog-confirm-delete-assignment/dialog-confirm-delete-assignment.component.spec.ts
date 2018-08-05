import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteAssignmentComponent } from './dialog-confirm-delete-assignment.component';

describe('DialogConfirmDeleteAssignmentComponent', () => {
  let component: DialogConfirmDeleteAssignmentComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmDeleteAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmDeleteAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
