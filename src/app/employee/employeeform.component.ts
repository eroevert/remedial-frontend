import {Component, OnInit} from '@angular/core';
import {Employeedata} from '../shared/employeedata';
import {EmployeeService} from '../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizationService} from '../services/organization.service';
import {Organization} from '../shared/organization';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {
  genderlist = [{codigo: 'M', nombre: 'Maculino'}, {codigo: 'F', nombre: 'Femenino'}];
  statuslist = [{codigo: 1, nombre: 'Activo'}, {codigo: 0, nombre: 'Inactivo'}];
  employee: Employeedata = new Employeedata();
  organizations: Organization[];
  organizationselec: Organization;
  private titulo: String = 'CREAR NUEVO EMPLEADO';

  constructor(private employeeservice: EmployeeService,
              private organizationService: OrganizationService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.organizationService.getOrganizations().subscribe(organization => this.organizations = organization['object']);
    // console.log(this.organizations);
    this.cargarEmployee();
  }

  public create(): void {
    this.employeeservice.createEmployee(this.employee)
      .subscribe(employeeRes => {
          if ( employeeRes['code'] === 1 ) {
            swal('Nuevo Empleado', `Empleado ${this.employee.firstName}
             ${this.employee.lastName} creado con exito`, 'success').then(
              () => {
                this.router.navigate(['/employees']);
              });
          } else {
            swal('Nuevo Empleado', employeeRes['message'], 'warning');
          }
        }
      );
  }

  actualizarEmployee(): void {
    this.employeeservice.updateEmployee(this.employee)
      .subscribe(employee => {
          console.log('Este es el empeado', employee);
          this.router.navigate(['/employees']);
          swal('Empleado Actualizado', `Empleado ${this.employee.firstName}
             ${this.employee.lastName} Actualizado con exito`, 'success');
        }
      );
  }


  cargarEmployee(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.titulo = 'MODIFICAR EMPLEADO';
        this.employeeservice.getEmployee(params['id']).subscribe((employee) => this.employee = employee);
        // console.log(this.employee.firstName);
      }
    });

  }

  back(): void {
    this.router.navigate(['/employees']);
  }


}
