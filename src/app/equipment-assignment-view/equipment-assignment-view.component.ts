///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {EquipmentAssignmentService} from '../services/equipment-assignment.service';

@Component({
  selector: 'app-equipment-assignment-view',
  templateUrl: './equipment-assignment-view.component.html',
  styleUrls: ['./equipment-assignment-view.component.scss']
})
export class EquipmentAssignmentViewComponent implements OnInit {
  equipmentAssignmentList: EquipmentAssignment[];
  equipmentAssignmentSelected: EquipmentAssignment;

  constructor(private equipmentAssignmentService: EquipmentAssignmentService) {
  }

  ngOnInit() {
    this.equipmentAssignmentService.getEquipmentByEmployeeKey(this.equipmentAssignmentSelected.employeeKey.toString())
      .subscribe(equipmentAssignments => {
        this.equipmentAssignmentList = equipmentAssignments;
        console.log('equipmentAssignments_emp', equipmentAssignments);
      });
  }

}
