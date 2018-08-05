import {Component, Inject, OnInit} from '@angular/core';
import {EquipmentTypeService} from '../services/equipmentType.service';
import {EquipmentType} from '../shared/equipmentType';
import {log} from 'util';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {EquipmentTypeFormComponent} from '../equipmentTypeForm/equipmentTypeForm.component';
import {MatDialog} from '@angular/material';
import {Equipment} from '../shared/equipment';
import {EquipmentViewComponent} from '../equipmentView/equipmentView.component';
import {EquipmentTypeViewComponent} from '../equipmentTypeView/equipmentTypeView.component';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import {EquipmentTypeEditFormComponent} from '../EquipmentTypeEditForm/equipmentTypeEditForm.component';

@Component({
  selector: 'app-equipment-type',
  templateUrl: './equipmentType.component.html',
  styleUrls: ['./equipmentType.component.scss']
})
export class EquipmentTypeComponent implements OnInit {
  equipmentTypes: EquipmentType[];
  equipmentTypeSelected: EquipmentType;
  // selectedEquipmentType: EquipmentType;

  constructor(private equipmentTypeService: EquipmentTypeService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.equipmentTypeService.getEquipmentTypes().subscribe(equipmentTypes => { this.equipmentTypes = equipmentTypes;
    log('equipos: ', this.equipmentTypes);
  });
}
  openNewEquipmentTypeForm() {
    this.dialog.open(EquipmentTypeFormComponent, {width: '500px', height: '450px'});
  }
  openViewForm(equipmentType: EquipmentType) {
    const dialogRef = this.dialog.open(EquipmentTypeViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentTypeSelected = equipmentType;
  }
  openEditForm(equipmentType: EquipmentType) {
    const dialogRef = this.dialog.open(EquipmentTypeEditFormComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentTypeSelected = equipmentType;
  }

  /*onSelect(equipmentType: EquipmentType) {
    this.selectedEquipmentType = equipmentType;
  }*/
  deleteEquipmentType(id: number) {
    swal({
      title: 'Eliminar Tipo de Equipo',
      text: 'Esta seguro que desea eliminar el  tipo de equipo seleccionado',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        this.equipmentTypeService.deleteEquipmentType(id)
          .subscribe(response => {
              if (response['code'] === 1) {
                swal('Eliminar Tipo de Equipo', 'El tipo de equipo fue eliminado correctamenre', 'success').then(
                  () => {
                    this.router.navigate(['/equipmentTypes']);
                    location.reload();
                  });
              } else {
                swal('Eliminar equipo', 'No se pudo eliminar, porque existen equipos registrados con este tipo de equipo', 'warning');
                this.router.navigate(['/equipmentTypes']);
              }
            }
          );

      }
    });


  }
}

