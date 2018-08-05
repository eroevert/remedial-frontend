import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {PositionHistorical} from '../shared/positionHistorical';
import {Item} from '../shared/item';
import {PositionhistoricalService} from '../services/positionhistorical.service';
import {ItemService} from '../services/item.service';
import {Employeedata} from '../shared/employeedata';
import {AlertsService} from 'angular-alert-module';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-positionalhitoricalform',
  templateUrl: './positionalhitoricalform.component.html',
  styleUrls: ['./positionalhitoricalform.component.scss']
})
export class PositionalhitoricalformComponent implements OnInit {
  positionHistorical: PositionHistorical = new PositionHistorical();
  items: Item[];
  statuslist = [{codigo: 1, nombre: 'Activo'}, {codigo: 0, nombre: 'Inactivo'}];
  employeeselec: Employeedata;
  phselect: PositionHistorical;
  titulo: string;

  constructor(public dialogRef: MatDialogRef<PositionalhitoricalformComponent>, private itemService: ItemService,
              private positionHistoricalService: PositionhistoricalService, private alerts: AlertsService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.itemService.getItemsEmp().subscribe(items => this.cargarPositionaHitorica(items['object']) );
    // console.log('imtems: ', this.items);
    // this.cargarPositionaHitorica();
  }


  create(): void {
    // console.log('clicked');
    this.positionHistorical.historialCargoId = 0;
    this.positionHistorical.employeeKey = this.employeeselec.employeeKey;
    // console.log(this.positionHistorical);
    try {
      this.positionHistoricalService.createPositionHistorical(this.positionHistorical).subscribe(response => {
        this.dialogRef.close();
        this.router.navigate(['/employees']);
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al guardar la asignación.', 'error');
        } else {
          swal('Asignacion Item', `El Item  se Asignó Correctamente`, 'success');
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al guardar la asignación.', 'error');
    }
  }

  cargarPositionaHitorica( items_val): void {
    this.items = items_val;
    if (this.employeeselec.employeeKey) {
      this.titulo = 'MODIFICAR PH';
      this.positionHistoricalService.getPositionHistoricalEmp(this.employeeselec.employeeKey)
        .subscribe((ph) => {
          if ( ph != null) {
            this.positionHistorical = ph[0];
          } else {
            this.positionHistorical = new PositionHistorical();
          }
            console.log('esto es ph', this.positionHistorical);
          }
        );

    }

  }

  actualizarPositionalHistorical(): void {

    this.positionHistoricalService.updatePositionalHistorical(this.positionHistorical)
      .subscribe(ph => {
        this.dialogRef.close();
        this.router.navigate(['/employees']);
        swal('Actualizacion', `El Item se Actualizó Correctamente`, 'success');
      });

    /* console.log('ph', this.positionHistorical);
    this.positionHistoricalService.updatePositionalHistorical(this.positionHistorical)
      .subscribe(ph => {
          console.log('Este es ', ph);
          this.dialogRef.close();
          swal('Actualizacion', `Posicion Actualizada con exito`, 'success');
        }
      );*/
  }

}
