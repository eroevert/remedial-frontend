import {Component, OnInit, ViewChild} from '@angular/core';
import {Accidentdata} from '../shared/accidentdata';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {Employeedata} from '../shared/employeedata';
import {EmployeeService} from '../services/employee.service';
import {Equipment} from '../shared/equipment';
import {MatAutocompleteTrigger, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {AccidentService} from '../services/accident.service';
import {AccidenttypeService} from '../services/accidenttype.service';
import {AlertsService} from 'angular-alert-module';
import {Accidenttypedata} from '../shared/accidenttypedata';
import swal from 'sweetalert2';

@Component({
  selector: 'app-accident-new-form',
  templateUrl: './accident-new-form.component.html',
  styleUrls: ['./accident-new-form.component.scss']
})
export class AccidentNewFormComponent implements OnInit {
  employeeCtrl: FormControl;
  filteredEmployee: Observable<Employeedata[]>;
  accident: Accidentdata;

  @ViewChild(MatAutocompleteTrigger)
  autoTrigger: MatAutocompleteTrigger;

  employees: Employeedata[];
  equipments: Equipment[];
  accidenttypes: Accidenttypedata[];
  statuslist = [{codigo: 1, nombre: 'Activo'}, {codigo: 0, nombre: 'Inactivo'}];

  constructor(private accidentService: AccidentService, private employeeService: EmployeeService,
              private accidenttypeService: AccidenttypeService, private router: Router,
              public dialogRef: MatDialogRef<AccidentNewFormComponent>, private alerts: AlertsService) {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        console.log('emp ', employees);
        this.employees = employees;
        this.employeeCtrl = new FormControl();
        this.filteredEmployee = this.employeeCtrl.valueChanges.startWith(null)
          .map(employee => employee ? this.filterEmployee(employee) : this.employees.slice());
      });
    this.accidenttypeService.getAccidenttypes().subscribe(accidenttype => this.accidenttypes = accidenttype);
    this.accident = new Accidentdata();
  }

  ngOnInit() {
  }

  filterEmployee(name: string) {
    return this.employees.filter(employee =>
      employee.firstName.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  public create(): void {
    try {
      this.accidentService.createAccident(this.accident).subscribe(response => {
        this.dialogRef.close();
        if (response['code'].toString() === '-1') {
          swal('Nuevo Accidente', response['message'], 'warning');
        } else {
          swal('Nuevo Accidente', `Accidente ${this.accident.code} creado con exito`, 'success').then(
            () => {
              location.reload();
            });
        }
      });
    } catch (e) {
      /*this.alerts.setMessage('Ocurrió un error al guardar el accidente.', 'error');*/
      swal('Nuevo Accidente', 'Error al crear el Accidente' + 'error', 'warning');
    }
  }
}
