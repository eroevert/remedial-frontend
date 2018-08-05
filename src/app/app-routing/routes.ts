import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {EmployeeComponent} from '../employee/employee.component';
import {EquipmentAssignmentComponent} from '../equipment-assignment/equipment-assignment.component';
import {DocumenttypesComponent} from '../documenttypes/documenttypes.component';
import {FormComponent} from '../documenttypes/form.component';
import {OrganizationComponent} from '../organization/organization.component';
import {EmployeeformComponent} from '../employee/employeeform.component';
import {EquipmentComponent} from '../equipment/equipment.component';
import {EquipmentFormComponent} from '../equipmentForm/equipmentForm.component';
import {AccidentComponent} from '../accident/accident.component';
import {AuthguardService} from '../services/authguard.service';
import {EquipmentAssignmentFormComponent} from '../equipment-assignment-form/equipment-assignment-form.component';
import {ReportComponent} from '../report/report.component';
import {InvetoryReportComponent} from '../invetory-report/invetory-report.component';
import {ParamComponent} from '../param/param.component';
import {AcademicLevelComponent} from '../academic-level/academic-level.component';
import {TypeContactComponent} from '../type-contact/type-contact.component';
import {TypeContractComponent} from '../type-contract/type-contract.component';
import {AccidentTypeComponent} from '../accident-type/accident-type.component';
import {ReportsComponent} from '../reports/reports.component';
import {OrganizationDetailComponent} from '../organization-detail/organization-detail.component';
import {EquipmentTypeComponent} from '../equipmentType/equipmentType.component';
import {PoliticasComponent} from '../politicas/politicas.component';
import {DwFeTableComponent} from '../dw-fe-table/dw-fe-table.component';
import {AuditoryComponent} from '../auditory/auditory.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeComponent, canActivate: [AuthguardService]},
  {path: 'employees/employeeform', component: EmployeeformComponent, canActivate: [AuthguardService]},
  {path: 'employees/employeeform/:id', component: EmployeeformComponent, canActivate: [AuthguardService]},
  {path: 'organizations', component: OrganizationComponent, canActivate: [AuthguardService]},
  {path: 'typeContract/:id', component: TypeContractComponent, canActivate: [AuthguardService]},
  {path: 'organization/:id', component: OrganizationDetailComponent, canActivate: [AuthguardService]},
  {path: 'documenttypes', component: DocumenttypesComponent, canActivate: [AuthguardService]},
  {path: 'documenttypes/form', component: FormComponent, canActivate: [AuthguardService]},
  {path : 'assignment', component : EquipmentAssignmentComponent},
  {path: 'equipments', component: EquipmentComponent, canActivate: [AuthguardService]},
  {path: 'equipments/equipmentform', component: EquipmentFormComponent, canActivate: [AuthguardService]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'reportes', component: ReportComponent},
  {path: 'inventoryreport', component: InvetoryReportComponent},
  {path: 'parametric', component: ParamComponent},
  {path: 'typecontact', component: TypeContactComponent},
  {path: 'typecontract', component: TypeContractComponent},
  {path: 'accidenttype', component: AccidentTypeComponent},
  {path: 'academiclevel', component: AcademicLevelComponent},
  {path: 'reportes', component: ReportComponent, canActivate: [AuthguardService]},
  {path: 'inventoryreport', component: InvetoryReportComponent, canActivate: [AuthguardService]},
  {path: 'assignment/form', component: EquipmentAssignmentFormComponent, canActivate: [AuthguardService]},
  {path: 'reports', component: ReportsComponent, canActivate: [AuthguardService]},
  {path: 'equipmentTypes', component: EquipmentTypeComponent, canActivate: [AuthguardService]},
  {path: 'politics', component: PoliticasComponent, canActivate: [AuthguardService]},
  {path: 'assignment/form', component: EquipmentAssignmentFormComponent, canActivate: [AuthguardService]},
  {path: 'reports', component: ReportsComponent},
  {path: 'accidents', component: AccidentComponent},
  {path: 'Reporting', component: DwFeTableComponent, canActivate: [AuthguardService]},
  {path: 'politics', component: PoliticasComponent, canActivate: [AuthguardService]},
  {path: 'auditory', component: AuditoryComponent, canActivate: [AuthguardService]}
  ];
