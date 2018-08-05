import {Accidenttypedata} from './accidenttypedata';

export class Accidentdata {
  accidentKey: number;
  dateEvent: string;
  dateRegister: string;
  title: string;
  describeIssue: string;
  suggestion: string;
  levelRiskId: number;
  accidentTypeKey: number;
  employeeKey: number;
  isAnonymous: boolean;
  responsibleEmployeeKey: number;
  status: string;
  closeDate: string;
  code: string;
  isMandatory: boolean;
  isVoluntary: boolean;
  endDate: string;
  createdReportFromAdmin: number;
  statusReport: number;
  accidentType: Accidenttypedata;
}
