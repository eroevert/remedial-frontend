import { Component, OnInit } from '@angular/core';
import {Equipment} from '../shared/equipment';
import {Observable} from 'rxjs/Observable';
import {AlertsService} from 'angular-alert-module';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {EQUIPMENTTYPES} from '../shared/equipmenTypes';
import {Router} from '@angular/router';
@Component({
  selector: 'app-equipment-edit-form',
  templateUrl: './equipmentEditForm.component.html',
  styleUrls: ['./equipmentEditForm.component.scss']
})
export class EquipmentEditFormComponent implements OnInit {
  equipments: Equipment[];
  equipmentSelected: Equipment;
  equipmentTypes: EquipmentType[] = EQUIPMENTTYPES;

  constructor(public dialogRef: MatDialogRef<EquipmentFormComponent>, private equipmentService: EquipmentService,
              private alerts: AlertsService, private equipmentTypeService: EquipmentTypeService, private router: Router,
              public dialog: MatDialog) {
  }
  ngOnInit() {
    this.equipmentTypeService.getEquipmentTypes()
      .subscribe(equipmentTypes => {
        this.equipmentTypes = equipmentTypes;
      });
  }
  update() {
    try {
      this.equipmentService.updateEquipment(this.equipmentSelected).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === '-1') {
          this.alerts.setMessage('Ocurrió un error al actualizar el equipo.', 'error');
        } else {
          this.alerts.setMessage('El equipo se actualizó correctamente', 'success');
          this.router.navigate(['/equipments']);
          location.reload();
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al actualizar el equipo.', 'error');
    }
  }
}
