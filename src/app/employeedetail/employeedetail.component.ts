import {Component, Input, OnInit} from '@angular/core';
import {Employeedata} from '../shared/employeedata';
import {PositionHistorical} from '../shared/positionHistorical';
import {PositionhistoricalService} from '../services/positionhistorical.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PositionalhitoricalformComponent} from '../positionhistorical/positionalhitoricalform.component';
import swal from 'sweetalert2';
import {Position} from '@angular/compiler';
import {TypeContract} from '../shared/typeContract';
import {PositionService} from '../services/position.service';
import {TypeContractService} from '../services/type-contract.service';
import {Item} from '../shared/item';


@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {
  @Input()
  employeedata: Employeedata;
  @Input()
  organizationkey: number;
  @Input()
  organizationName: string;
  @Input()
  posHistorical: PositionHistorical[];
  @Input()
  item: Item;
  position: Position;
  typeContract: TypeContract;


  constructor(private positionalhistoricalService: PositionhistoricalService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private positionService: PositionService, private typeContractService: TypeContractService,
              public dialog: MatDialog) {
  }

  eliminarPosicionaleHistorical(Ph: PositionHistorical) {
    swal({
      title: 'Estas Seguro?',
      text: 'Estas Seguro que deseas eliminar al Empleado!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.positionalhistoricalService.deletePositionHistoricalEmp(Ph.historialCargoId)
          .subscribe(responce => {

              swal('Eliminar Empleado', 'Empleado Eliminado Correctamenre', 'success');
              this.router.navigate(['/employees']);
              location.reload();


            }
          );

      }
    });

  }

  openEditPositionalHist(employee: Employeedata) {
    const dialogRef = this.dialog.open(PositionalhitoricalformComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.employeeselec = employee;
  }

  ngOnInit() {
    // this. organizationService.getOrganizationEmp(this.organizationkey)
    //  .subscribe(organizationselec => this.organizationSelec = organizationselec);
    // this.organizationService.getOrganizations().subscribe(organization => this.organizations = organization);
  }

}
