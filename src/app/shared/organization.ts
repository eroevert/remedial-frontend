import {HierarchicalLevel} from './hierarchicalLevel';

export class Organization {
  organizationKey: number;
  hierarchicalLevelKey: string;
  name: string;
  idPadre: number;
  description: string;
  code: string;
  start: string;
  end: string;
  status: string;
  gestion: number;
  hierarchicalLevelByHierarchicalLevelKey: HierarchicalLevel;
  createdOn: string;
}
