import {Component, OnInit, Inject} from '@angular/core';
import {ReturnModel} from '../shared/returnModel';
import {Organization} from '../shared/organization';
import {Item} from '../shared/item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../services/item.service';
import {TypeContractService} from '../services/type-contract.service';
import {SalaryScaleService} from '../services/salary-scale.service';
import {PositionService} from '../services/position.service';
import {SalaryScale} from '../shared/salaryScale';
import {PositionOrg} from '../shared/position';
import {TypeContract} from '../shared/typeContract';
import {City} from '../shared/city';
import {CityService} from '../services/city.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  item: Item = new Item();
  salaryScales: SalaryScale[];
  positions: PositionOrg[];
  typesContract: TypeContract[];
  cities: City[];
  organizationKey: number;
  constructor(public dialogRef: MatDialogRef<ItemFormComponent>,
              private typeContractService: TypeContractService,
              private salaryScaleService: SalaryScaleService,
              private positionService: PositionService,
              private itemService: ItemService,
              private cityService: CityService,
              private alerts: AlertsService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    this.organizationKey = this.data.organizationKey;
    this.typeContractService.getTypeContracts().subscribe(typesContract => {
      this.typesContract = typesContract;
    });
    this.positionService.getPositions().subscribe(position => this.positions = position['object']);
    this.salaryScaleService.getSalaryScales().subscribe(scale => this.salaryScales = scale['object']);
    this.cityService.getCitys().subscribe(city => this.cities = city['object']);

  }
  onSubmit() {
    this.item.organizationKey = this.organizationKey;
    this.item.itemNumber = 1;
    this.itemService.saveItem(this.item).subscribe(resultado => this.validateResult(resultado));
  }
  validateResult(result: ReturnModel<Organization>) {
    if (result['code'] === 1) {
      this.dialogRef.close();
      swal('Items', 'El Item fue creado correctamente', 'success').then(
        () => {
          location.reload();
        });
    } else {
      swal('Items', result['message'], 'warning').then(
        () => {
          // location.reload();
        });
      // this.alerts.setMessage(result['message'], 'error');
    }
  }
}
