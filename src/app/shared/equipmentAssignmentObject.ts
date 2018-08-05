import {EquipmentAssignment} from './equipmentAssignment';

export class EquipmentAssignmentObject implements EquipmentAssignment {
  employeeCode: string;
  employeeKey: number;
  employeeName: string;
  equipmentAssignmentKey: number;
  equipmentCode: string;
  equipmentKey: number;
  equipmentName: string;
  observations: string;
  userKey: number;
  userName: string;
  version: number;


  constructor() {
  }
}
