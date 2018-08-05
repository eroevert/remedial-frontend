import { Component, OnInit } from '@angular/core';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';
import {FormControl} from '@angular/forms';
import {Equipment} from '../shared/equipment';
import {Observable} from 'rxjs/Observable';
import {EQUIPMENTS} from '../shared/equipments';
import {AlertsService} from 'angular-alert-module';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentAssignmentViewComponent} from '../equipment-assignment-view/equipment-assignment-view.component';
import {DialogConfirmDeleteAssignmentComponent} from '../dialog-confirm-delete-assignment/dialog-confirm-delete-assignment.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-equipment-assignment-edit-form',
  templateUrl: './equipment-assignment-edit-form.component.html',
  styleUrls: ['./equipment-assignment-edit-form.component.scss']
})
export class EquipmentAssignmentEditFormComponent implements OnInit {

  equipmentAssignments: EquipmentAssignment[];
  equipmentAssignmentSelected: EquipmentAssignment;
  equipmentCtrl: FormControl;
  filteredEquipment: Observable<Equipment[]>;
  equipments: Equipment[] = EQUIPMENTS;
  isEdited: boolean;
  toDelete: boolean;
  constructor(public dialogRef: MatDialogRef<EquipmentFormComponent>, private equipmentAssignmentService: EquipmentAssignmentService,
              private alerts: AlertsService, private equipmentService: EquipmentService, public dialog: MatDialog) {
    this.equipmentService.getEquipments()
      .subscribe(equipments => {
        this.equipments = equipments;
        this.equipmentCtrl = new FormControl();
        this.filteredEquipment = this.equipmentCtrl.valueChanges.startWith(null)
          .map(eq => eq ? this.filterEquipment(eq) : this.equipments.slice());
      });
    this.isEdited = false;
  }

  ngOnInit() {
    this.equipmentAssignmentService.getEquipmentByEmployeeKey(this.equipmentAssignmentSelected.employeeKey.toString())
      .subscribe(equipmentAssignments => {
        this.equipmentAssignments = equipmentAssignments;
      });
  }

  update() {
    try {
      this.equipmentAssignmentService.updateAssignment(this.equipmentAssignmentSelected).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          swal('Asignacion de equipos', 'Ocurrió un error al actualizar la asignación.', 'warning').then(
            () => {
              // location.reload();
            });
        } else {
          swal('Asignacion de Equipos', 'La actualizacion se realizo correctamente', 'success').then(
            () => {
              location.reload();
            });
        }
      });
    } catch (e) {
      swal('Asignacion de equipos', 'Ocurrió un error al actulizar la asignación.', 'warning').then(
        () => {
          // location.reload();
        });
    }
  }

  filterEquipment(name: string) {
    console.log('equipments ', this.equipments);
    return this.equipments.filter(eq =>
      eq.name.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  clearForm() {
    this.equipmentCtrl.setValue('');
  }

  setEditEquipmentAssignment(equipmentToEdit: EquipmentAssignment) {
    this.filteredEquipment = this.equipmentCtrl.valueChanges.startWith(null)
      .map(eq => eq ? this.filterEquipment(eq) : this.equipments.slice());
    this.isEdited = true;
    this.equipmentAssignmentSelected = equipmentToEdit;
  }

  openConfirmDialog(equipmentSelected: EquipmentAssignment) {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(DialogConfirmDeleteAssignmentComponent, {width: '450px', height: '250px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentAssignmentSelected = equipmentSelected;
  }
}
