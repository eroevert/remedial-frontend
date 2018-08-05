import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {EquipmentTypeFormComponent} from '../equipmentTypeForm/equipmentTypeForm.component';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-type-delete',
  templateUrl: './equipmentTypeDelete.component.html',
  styleUrls: ['./equipmentTypeDelete.component.scss']
})
export class EquipmentTypeDeleteComponent implements OnInit {

  equipmentTypeSelected: EquipmentType;

  constructor(public dialogRef: MatDialogRef<EquipmentTypeFormComponent>, private equipmentTypeService: EquipmentTypeService,
              private alerts: AlertsService,  private router: Router) { }

  ngOnInit() {
  }

  confirmar() {
    try {
      console.log('id' , this.equipmentTypeSelected.equipmentTypeKey);
      this.equipmentTypeService.deleteEquipmentType(this.equipmentTypeSelected.equipmentTypeKey).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al eliminar el tipo de equipo.', 'error');
        } else {
          this.alerts.setMessage('Se elimino con exito', 'success');
          this.router.navigate(['/equipmentTypes']);
          location.reload();
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al eliminar el tipo de equipo.', 'error');
    }
  }

}
