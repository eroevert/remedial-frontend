///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {EquipmentType} from '../shared/equipmentType';
import {EquipmentTypeService} from '../services/equipmentType.service';

@Component({
  selector: 'app-equipment-type-view',
  templateUrl: './equipmentTypeView.component.html',
  styleUrls: ['./equipmentTypeView.component.scss']
})
export class EquipmentTypeViewComponent implements OnInit {
  equipmentTypeSelected: EquipmentType;
  equipmentType: EquipmentType;

  constructor(private equipmentTypeService: EquipmentTypeService) {
  }

  ngOnInit() {
    this.equipmentTypeService.getEquipmentType(this.equipmentTypeSelected.toString())
      .subscribe(equipmentType => this.equipmentType = equipmentType);
      }
  }

