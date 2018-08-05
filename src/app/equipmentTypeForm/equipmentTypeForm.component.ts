import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-equipment-type-form',
  templateUrl: './equipmentTypeForm.component.html',
  styleUrls: ['./equipmentTypeForm.component.scss']
})
export class EquipmentTypeFormComponent implements OnInit {
  equipmentType: EquipmentType = new EquipmentType();

  constructor(public dialogRef: MatDialogRef<EquipmentTypeFormComponent>, private equipmentTypeService: EquipmentTypeService,
              private alerts: AlertsService, private router: Router) {
  }

  ngOnInit() {
  }

  /*onSubmit() {
    const result = this.equipmentService.saveEquipment(this.equipment);
    console.log('User', result);
    if (result['code'] = 1) {
      location.reload();
    } else {
      this.alerts.setMessage('All the fields are required', 'error');
      console.log('Error:' + result['menssage']);
    }
    this.dialogRef.close();
  }*/
  public create(): void {
    try {
      this.equipmentTypeService.createEquipmentType(this.equipmentType).subscribe(response => {
        this.router.navigate(['/equipmentTypes']);
        this.dialogRef.close();
        if (response['code'] === -1) {
          swal('Estructura Organizacional', 'Ocurrió un error al registrar el tipo de equipo.', 'warning').then(
            () => {
            });
        } else {
          swal('Tipo de Equipo', 'El tipo de equipo fue registrado', 'success').then(
            () => {
              location.reload();
            });
        }
      });
    } catch (e) {
      swal('Estructura Organizacional', 'Ocurrió un error al registrar el tipo de equipo.', 'warning').then(
        () => {
          // location.reload();
        });
    }
  }
}
