import { Component, OnInit } from '@angular/core';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {Equipment} from '../shared/equipment';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentTypeFormComponent} from '../equipmentTypeForm/equipmentTypeForm.component';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipmentDelete.component.html',
  styleUrls: ['./equipmentDelete.component.scss']
})
export class EquipmentDeleteComponent implements OnInit {

  equipmentSelected: Equipment;

  constructor(public dialogRef: MatDialogRef<EquipmentTypeFormComponent>, private equipmentService: EquipmentService,
              private alerts: AlertsService) {
  }

  ngOnInit() {
  }
}
  /*confirmar() {
    try {
      this.equipmentService.deleteEquipment(this.equipmentSelected).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al eliminar el equipo.', 'error');
        } else {
          this.alerts.setMessage('El equipo fue eliminado', 'success');
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al eliminar el equipo.', 'error');
    }*/
