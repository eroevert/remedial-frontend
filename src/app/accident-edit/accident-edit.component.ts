import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AlertsService} from 'angular-alert-module';
import {Accidenttypedata} from '../shared/accidenttypedata';
import {FormControl} from '@angular/forms';
import {AccidenttypeService} from '../services/accidenttype.service';
import {AccidentNewFormComponent} from '../accident-new-form/accident-new-form.component';
import {Employeedata} from '../shared/employeedata';
import {AccidentService} from '../services/accident.service';
import {EmployeeService} from '../services/employee.service';
import {Equipment} from '../shared/equipment';
import {Accidentdata} from '../shared/accidentdata';
import {MatAutocompleteTrigger, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accident-edit',
  templateUrl: './accident-edit.component.html',
  styleUrls: ['./accident-edit.component.scss']
})
export class AccidentEditComponent implements OnInit {

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
        this.employees = employees;
        this.employeeCtrl = new FormControl();
        this.filteredEmployee = this.employeeCtrl.valueChanges.startWith(null)
          .map(employee => employee ? this.filterEmployee(employee) : this.employees.slice());
      });
    this.accident = new Accidentdata();
  }

  ngOnInit() {
    this.accidenttypeService.getAccidenttypes().subscribe(accidenttype => this.accidenttypes = accidenttype);
  }

  filterEmployee(name: string) {
    return this.employees.filter(employee =>
      employee.firstName.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  public create(): void {
    try {
      this.accidentService.createAccident(this.accident).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === '-1') {
          this.alerts.setMessage('Ocurrió un error al guardar la asignación.', 'error');
        } else {
          this.alerts.setMessage('La asignación se registró correctamente', 'success');
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al guardar la asignación.', 'error');
    }
  }
}
