import {Organization} from './organization';

export class Politic {
  politicsKey: number;
  politicsName: string;
  politicsDesc: string;
}
export class PoliticNotification {
  politic: Politic;
  organizations: number[];
  createById: number;
}
export class OrganizationIds {
  organizations: number[];
}
export class OrganizationCheckBox extends Organization{
  checked: boolean;
}
