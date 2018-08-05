import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MatAutocompleteTrigger, MatDialogRef} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Employeedata} from '../shared/employeedata';
import {Equipment} from '../shared/equipment';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';
import {Router} from '@angular/router';
import {EquipmentAssignmentObject} from '../shared/equipmentAssignmentObject';
import {EmployeeService} from '../services/employee.service';
import {EquipmentService} from '../services/equipment.service';
import {AlertsService} from 'angular-alert-module';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import swal from 'sweetalert2';

@Component({
  selector: 'app-equipment-assignment-form',
  templateUrl: './equipment-assignment-form.component.html',
  styleUrls: ['./equipment-assignment-form.component.scss'],
  providers: [EquipmentAssignmentService, EquipmentService, EmployeeService]
})
export class EquipmentAssignmentFormComponent implements OnInit {
  employeeCtrl: FormControl;
  equipmentCtrl: FormControl;
  filteredEmployee: Observable<Employeedata[]>;
  filteredEquipment: Observable<Equipment[]>;
  equipmentAssignment: EquipmentAssignment;

  @ViewChild(MatAutocompleteTrigger)
  autoTrigger: MatAutocompleteTrigger;

  employees: Employeedata[];
  equipments: Equipment[];

  constructor(private equipmentAssignmentService: EquipmentAssignmentService, private employeeService: EmployeeService,
              private equipmentService: EquipmentService, private router: Router, private alerts: AlertsService,
              public dialogRef: MatDialogRef<EquipmentAssignmentFormComponent>) {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
        this.employeeCtrl = new FormControl();
        this.filteredEmployee = this.employeeCtrl.valueChanges.startWith(null)
          .map(employee => employee ? this.filterEmployee(employee) : this.employees.slice());
      });
    this.equipmentService.getEquipments()
      .subscribe(equipments => {
        this.equipments = equipments.object;
        this.equipmentCtrl = new FormControl();
        this.filteredEquipment = this.equipmentCtrl.valueChanges.startWith(null)
          .map(eq => eq ? this.filterEquipment(eq) : this.equipments.slice());
      });
    this.equipmentAssignment = new EquipmentAssignmentObject();
  }

  ngOnInit() {
  }

  filterEmployee(name: string) {
    return this.employees.filter(employee =>
      employee.firstName.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  filterEquipment(name: string) {
    return this.equipments.filter(eq =>
      eq.name.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }

  clearForm() {
    this.employeeCtrl.setValue('');
    this.equipmentCtrl.setValue('');
  }

  public create(): void {
    try {
      this.equipmentAssignmentService.createAssignment(this.equipmentAssignment).subscribe(response => {
        this.dialogRef.close();
        console.log('create siggment: ', response);
        if (response['code'] === -1) {
          swal('Asignacion de equipos', 'Ocurrió un error al guardar la asignación.', 'warning').then(
            () => {
              // location.reload();
            });
        } else {
          swal('Asignacion de Equipos', 'La asignación se registró correctamente', 'success').then(
            () => {
              location.reload();
            });
        }
      });
    } catch (e) {
      swal('Asignacion de equipos', 'Ocurrió un error al guardar la asignación.', 'warning').then(
        () => {
          // location.reload();
        });
    }
  }
}
