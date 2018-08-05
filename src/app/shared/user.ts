import {Employeedata} from './employeedata';
import {Rol} from './rol';
import {Organization} from './organization';

export class User {
  userKey:  number;
  employeeKey: number;
  rolKey: number;
  userName: string;
  password: string;
  status: string;
  employeeByEmployeeKey: Employeedata;
  rolByRolKey: Rol;
  organizationByOrganizationKey: Organization;
}
