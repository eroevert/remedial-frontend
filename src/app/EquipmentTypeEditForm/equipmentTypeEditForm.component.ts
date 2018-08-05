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
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {EQUIPMENTTYPES} from '../shared/equipmenTypes';
import {EquipmentTypeFormComponent} from '../equipmentTypeForm/equipmentTypeForm.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipmentent-type-edit-form',
  templateUrl: './equipmentTypeEditForm.component.html',
  styleUrls: ['./equipmentTypeEditForm.component.scss']
})
export class EquipmentTypeEditFormComponent implements OnInit {

  equipmentTypes: EquipmentType[];
  equipmentTypeSelected: EquipmentType;

  constructor(public dialogRef: MatDialogRef<EquipmentTypeFormComponent>, private equipmentTypeService: EquipmentTypeService,
              private alerts: AlertsService,  public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
  }

  update() {
    try {
      this.equipmentTypeService.updateEquipmentType(this.equipmentTypeSelected).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al actualizar el tipo de equipo.', 'error');
        } else {
          this.alerts.setMessage('El tipo de equipo se actualizó correctamente', 'success');
          this.router.navigate(['/equipmentTypes']);
          location.reload();
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al actualizar el tipo de equipo.', 'error');
    }
  }
}
