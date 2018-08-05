import { Component, OnInit } from '@angular/core';
import {Employeedata} from '../shared/employeedata';
import {EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  selectedValue: string;

  empleados = [
    {value: 'emp-1' , viewValue: 'nataly'} ,
    {value: 'emp-2' , viewValue: 'tanya'} ,
  ];

  constructor(private employeeService: EmployeeService) {
  }

  employees: Employeedata[];
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(empl => {
        this.employees = empl;
      });
  }
}


