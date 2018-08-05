///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Equipment} from '../shared/equipment';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipmentView.component.html',
  styleUrls: ['./equipmentView.component.scss']
})
export class EquipmentViewComponent implements OnInit {
  equipmentSelected: Equipment;
  equipment: Equipment;
  equipmentTypeSelected: EquipmentType;
  equipmentType: EquipmentType;

  constructor(private equipmentService: EquipmentService, private equipmentTypeService: EquipmentTypeService) {
  }

  ngOnInit() {
    this.equipmentService.getEquipment(this.equipmentSelected.toString())
      .subscribe(equipment => this.equipment = equipment);
    this.equipmentTypeService.getEquipmentType(this.equipmentTypeSelected.toString())
      .subscribe(equipmentType => this.equipmentType = equipmentType);

  }
  }

