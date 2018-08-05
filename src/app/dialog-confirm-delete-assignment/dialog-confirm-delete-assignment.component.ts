import { Component, OnInit } from '@angular/core';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-confirm-delete-assignment',
  templateUrl: './dialog-confirm-delete-assignment.component.html',
  styleUrls: ['./dialog-confirm-delete-assignment.component.scss']
})
export class DialogConfirmDeleteAssignmentComponent implements OnInit {

  equipmentAssignmentSelected: EquipmentAssignment;

  constructor(public dialogRef: MatDialogRef<EquipmentFormComponent>, private equipmentAssignmentService: EquipmentAssignmentService,
              private alerts: AlertsService) {
  }

  ngOnInit() {
  }

  confirmar() {
    try {
      this.equipmentAssignmentService.deleteAssignment(this.equipmentAssignmentSelected).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          swal('Asignacion de equipos', 'Ocurrió un error al eliminar la asignación.', 'warning').then(
            () => {
              // location.reload();
            });
        } else {
          swal('Asignacion de Equipos', 'La asignación se elimino correctamente', 'success').then(
            () => {
              location.reload();
            });
        }
      });
    } catch (e) {
      swal('Asignacion de equipos', 'Ocurrió un error al eliminar la asignación.', 'warning').then(
        () => {
          // location.reload();
        });
    }
  }
}
