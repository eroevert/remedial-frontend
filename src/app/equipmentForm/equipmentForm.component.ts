import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {Equipment} from '../shared/equipment';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {EquipmentService} from '../services/equipment.service';
import {Observable} from 'rxjs/Observable';
import {EquipmentAssignmentObject} from '../shared/equipmentAssignmentObject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipmentForm.component.html',
  styleUrls: ['./equipmentForm.component.scss']
})
export class EquipmentFormComponent implements OnInit {
  equipment: Equipment = new Equipment();
  equipmentType: EquipmentType[];
  constructor(public dialogRef: MatDialogRef<EquipmentFormComponent>, private equipmentTypeService: EquipmentTypeService,
              private equipmentService: EquipmentService, private alerts: AlertsService, private router: Router) {}

  ngOnInit() {
    this.equipmentTypeService.getEquipmentTypes().subscribe(tipos => this.equipmentType = tipos);
  }
  public create(): void {
    try {
      this.equipmentService.createEquipment(this.equipment).subscribe(response => {
        this.router.navigate(['/equipments']);
        location.reload();
        this.dialogRef.close();
        if (response['code'] === '-1') {
          this.alerts.setMessage('Ocurrió un error al registrar el equipo.', 'error');
        } else {
          this.alerts.setMessage('El equipo fue registrado', 'success');
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al registrar el equipo.', 'error');
    }
  }
}
