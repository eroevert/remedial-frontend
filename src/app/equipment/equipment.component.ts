import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Equipment} from '../shared/equipment';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {EquipmentAssignmentViewComponent} from '../equipment-assignment-view/equipment-assignment-view.component';
import {EquipmentAssignmentEditFormComponent} from '../equipment-assignment-edit-form/equipment-assignment-edit-form.component';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentEditFormComponent} from '../equipmentEditForm/equipmentEditForm.component';
import {EquipmentViewComponent} from '../equipmentView/equipmentView.component';
import swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipmentTypeFormComponent} from '../equipmentTypeForm/equipmentTypeForm.component';
import {EquipmentTypeComponent} from '../equipmentType/equipmentType.component';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipments: Equipment[];
  selectedEquipment: Equipment;
  constructor(private equipmentService: EquipmentService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.equipmentService.getEquipments().subscribe(equipment => this.equipments = equipment
    );
    console.log('eqs', this.equipments);
  }

 /* onSelect(item: Equipment) {
    this.selectedEquipment = item;
  }*/
  openNewEquipmentForm() {
    this.dialog.open(EquipmentFormComponent, {width: '500px', height: '450px'});
  }
  /*openNewEquipmentTypeForm() {
    this.dialog.open(EquipmentTypeFormComponent, {width: '500px', height: '450px'});
  }*/
  EquipmentType() {
    this.dialog.open(EquipmentTypeComponent, {width: '500px', height: '450px'});
  }

  openViewForm(equipment: Equipment) {
    const dialogRef = this.dialog.open(EquipmentViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentSelected = equipment;
  }

  openEditForm(equipment: Equipment) {
    const dialogRef = this.dialog.open(EquipmentEditFormComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentSelected = equipment;
  }

  /*openDeleteForm(equipment: Equipment) {
    const dialogRef = this.dialog.open(EquipmentEditFormComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.equipmentSelected = equipment;
    instance.toDelete = true;
  }*/
  deleteEquipment(id: number) {
    swal({
      title: 'Eliminar Equipo',
      text: 'Esta seguro que desea eliminar el equipo seleccionado',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        this.equipmentService.deleteEquipment(id)
          .subscribe(response => {
              if (response['code'] === 1) {
                swal('Eliminar Equipo', 'Equipo eliminado correctamenre', 'success');
                this.router.navigate(['/equipments']);
                location.reload();
              } else {
                swal('Eliminar equipo', 'No se pudo eliminar el equipo, porque esta asignado a algun empleado', 'warning');
                this.router.navigate(['/equipments']);
              }
            }
          );

      }
    });


  }
}
