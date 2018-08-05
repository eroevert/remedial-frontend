import {OrganizationalHierarchy} from './organizationalHierarchy';

export class PositionOrg {
  positionKey: number;
  organizationalHierarchyKey: number;
  name: string;
  education: string;
  status: string;
  description: string;
  organizationalHierarchyByOrganizationalHierarchyKey: OrganizationalHierarchy;
}
