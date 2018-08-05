import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {OrganizationCheckBox, OrganizationIds, Politic, PoliticNotification} from '../shared/politic';
import {AlertsService} from 'angular-alert-module';
import {PoliticsService} from '../services/politics.service';
import {MatDialogRef} from '@angular/material';
import {OrganizationService} from '../services/organization.service';
import {EmployeeService} from '../services/employee.service';
import {Organization} from '../shared/organization';
import {Employeedata} from '../shared/employeedata';

@Component({
  selector: 'app-politic-form',
  templateUrl: './politic-form.component.html',
  styleUrls: ['./politic-form.component.scss']
})
export class PoliticFormComponent implements OnInit {

  public politic: Politic;
  private politicNotification: PoliticNotification;
  public organizations: OrganizationCheckBox[];
  public employees: Employeedata[];

  constructor(
    private alerts: AlertsService,
    private politicsService: PoliticsService,
    private organizationService: OrganizationService,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<PoliticFormComponent>) {
    this.politic = new Politic();
    this.organizations = [];
    this.employees = [];
    this.politicNotification = new PoliticNotification();
  }

  ngOnInit() {
    this.politicNotification.organizations = [];
    this.organizationService.getOrganizations().subscribe(
      value => {
        this.organizations = value.object;
        this.organizations.map(org => org.checked = false);
      }
    );
    this.loadEmployeesNotication();
  }

  private loadEmployeesNotication() {
    const organizationIds = new OrganizationIds();
    organizationIds.organizations = this.politicNotification.organizations;
    this.employees = [];
    this.employeeService.getEmployeesByOrganization(organizationIds).subscribe(
      value => {
        this.employees = value.object;
      }
    );
  }

  public create(): void {
    try {
      this.politicNotification.politic = this.politic;
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.politicNotification.createById = user.employeeKey;
      this.politicsService.createPolitic(this.politicNotification).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al guardar la Politica.', 'error');
        } else {
          this.alerts.setMessage('La Politica se registró correctamente', 'success');
          this.politicsService.loadPolitics.next(true);
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al guardar la asignación.', 'error');
    }
  }

  onChkChange(organization: OrganizationCheckBox) {
    this.organizations.map(value => {
      if (value === organization) {
        value.checked = !value.checked;
        if (value.checked) {
          this.politicNotification.organizations.push(value.organizationKey);
        }
        if (!value.checked) {
          const index: number = this.politicNotification.organizations.indexOf(value.organizationKey);
          if (index !== -1) {
            this.politicNotification.organizations.splice(index, 1);
          }
        }
      }
      console.log(this.politicNotification.organizations);
      this.loadEmployeesNotication();
    });
  }

}
