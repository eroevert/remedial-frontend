import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Accidentdata} from '../shared/accidentdata';
import {AccidentService} from '../services/accident.service';
import {AccidentNewFormComponent} from '../accident-new-form/accident-new-form.component';
import {AccidentViewComponent} from '../accident-view/accident-view.component';
import {AccidentEditComponent} from '../accident-edit/accident-edit.component';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentAssignmentEditFormComponent} from '../equipment-assignment-edit-form/equipment-assignment-edit-form.component';
import {DialogConfirmDeleteAccidentComponent} from '../dialog-confirm-delete-accident/dialog-confirm-delete-accident.component';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {

  accidents: Accidentdata[];

  constructor(private accidentService: AccidentService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.accidentService.getAccidents()
      .subscribe(accidents => {
        this.accidents = accidents;
      });
  }

  openNewAccident() {
    this.dialog.open(AccidentNewFormComponent, {width: '500px', height: '600px'});
  }

  openViewForm(accident: Accidentdata) {
    const dialogRef = this.dialog.open(AccidentViewComponent, {width: '500px', height: '600px'});
    const instance = dialogRef.componentInstance;
    instance.accident = accident;
  }

  openEditForm(accident: Accidentdata) {
    const dialogRef = this.dialog.open(AccidentEditComponent, {width: '500px', height: '600px'});
    const instance = dialogRef.componentInstance;
    instance.accident = accident;
  }

  openDeleteForm(accident: Accidentdata) {
    const dialogRef = this.dialog.open(DialogConfirmDeleteAccidentComponent, {width: '500px', height: '250px'});
    const instance = dialogRef.componentInstance;
    instance.accident = accident;
  }

}
