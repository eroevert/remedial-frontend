import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EmployeeService} from '../services/employee.service';
import {Employeedata} from '../shared/employeedata';
import {ActivatedRoute, Router} from '@angular/router';
import {Organization} from '../shared/organization';
import {OrganizationService} from '../services/organization.service';
import {PositionHistorical} from '../shared/positionHistorical';
import {PositionhistoricalService} from '../services/positionhistorical.service';
import {PositionalhitoricalformComponent} from '../positionhistorical/positionalhitoricalform.component';
import {AlertsService} from 'angular-alert-module';
import swal from 'sweetalert2';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Employeedata[];
  employeeselec: Employeedata;
  organizationSelec: Organization;
  positionHistorical: PositionHistorical[];
  item: Item;

  constructor(private employeeService: EmployeeService, private organizationService: OrganizationService,
              private positionalhistoricalService: PositionhistoricalService, private itemsService: ItemService,
              private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog
    , private alerts: AlertsService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  onSelect(employee: Employeedata) {
    this.employeeselec = employee;
    this.LoadData(this.employeeselec);
  }
  LoadData(employee) {
    this.organizationService.getOrganizationEmp(employee.organizationKey)
      .subscribe(organizationselec => this.organizationSelec = organizationselec);
    this.positionalhistoricalService.getPositionHistoricalsEmployee(employee.employeeKey)
      .subscribe(positionalhistorical => this.positionHistorical = positionalhistorical);
    if ( this.positionHistorical != null) {
      this.itemsService.getItem(this.positionHistorical[0].itemKey).subscribe(item => this.item = item['object']);
    }
  }

  openNewAssignment(employee: Employeedata) {
    const dialogRef = this.dialog.open(PositionalhitoricalformComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.employeeselec = employee;
  }

  DeleteEmployee(id: number) {

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
        this.employeeService.deleteEmployee2(id)
          .subscribe(responce => {
              if (responce['code'] === 1) {
                swal('Eliminar Empleado', 'Empleado Eliminado Correctamenre', 'success');
                this.router.navigate(['/employees']);
                location.reload();

              } else {
                // this.alerts.setMessage('No se Pudo Eliminar al Empleado por que tiene algun Equipo o Item Asignado', 'error');
                swal('Eliminar Empleado', 'No se pudo eliminar porque tiene algun equipo o item asignado', 'warning');
                this.router.navigate(['/employees']);
              }
            }
          );

      }
    });


  }
}


