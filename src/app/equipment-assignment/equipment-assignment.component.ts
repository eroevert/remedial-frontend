import {Component, Inject, OnInit } from '@angular/core';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';
import {MatDialog} from '@angular/material';
import {EquipmentAssignmentFormComponent} from '../equipment-assignment-form/equipment-assignment-form.component';
import {EquipmentAssignmentViewComponent} from '../equipment-assignment-view/equipment-assignment-view.component';
import {EquipmentAssignmentEditFormComponent} from '../equipment-assignment-edit-form/equipment-assignment-edit-form.component';

@Component({
  selector: 'app-equipment-assignment',
  templateUrl: './equipment-assignment.component.html',
  styleUrls: ['./equipment-assignment.component.scss']
})
export class EquipmentAssignmentComponent implements OnInit {

  equipmentAssignments: EquipmentAssignment[];
  selectEquipmentAssignment: EquipmentAssignment;

  constructor(private equipmentAssignmentService: EquipmentAssignmentService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.equipmentAssignmentService.getEmployeeWithEquipmentAssignments()
      .subscribe(equipmentAssignments => {
        this.equipmentAssignments = equipmentAssignments;
      });
  }

  onSelect(equipmentAssignment: EquipmentAssignment) {
    this.selectEquipmentAssignment = equipmentAssignment;
  }

  openNewAssignment() {
    this.dialog.open(EquipmentAssignmentFormComponent, {width: '500px', height: '450px'});
  }

  openViewForm(equipmentAssignment: EquipmentAssignment) {
    const dialogRef = this.dialog.open(EquipmentAssignmentViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentAssignmentSelected = equipmentAssignment;
  }

  openEditForm(equipmentAssignment: EquipmentAssignment) {
    const dialogRef = this.dialog.open(EquipmentAssignmentEditFormComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentAssignmentSelected = equipmentAssignment;
    instance.toDelete = false;
  }

  openDeleteForm(equipmentAssignment: EquipmentAssignment) {
    const dialogRef = this.dialog.open(EquipmentAssignmentEditFormComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentAssignmentSelected = equipmentAssignment;
    instance.toDelete = true;
  }

}
