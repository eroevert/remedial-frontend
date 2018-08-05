import {Item} from './item';

export class PositionHistorical {
  historialCargoId: number;
  employeeKey: number;
  itemKey: number;
  memoNumber: string;
  start: string;
  end: string;
  status: string;
  responsibleKey: number;
  approvalDate: string;
  employeeByEmployeeKey: number;
  itemByItemKey: Item;
}
