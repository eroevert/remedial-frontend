import {Organization} from './organization';
import {SalaryScale} from './salaryScale';
import {PositionOrg} from './position';
import {TypeContract} from './typeContract';

export class Item {
  itemKey: number;
  organizationKey: number;
  typeContractKey: number;
  itemNumber: number;
  positionKey: number;
  salaryScaleKey: number;
  code: string;
  status: string;
  cityKey: number;
  organizationByOrganizationKey: Organization;
  typeContractByTypeContractKey: TypeContract;
  positionByPositionKey: PositionOrg;
  salaryScaleBySalaryScaleKey: SalaryScale;
}
