///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Organization} from '../shared/organization';
import {HierarchicalLevel} from '../shared/hierarchicalLevel';
import {OrganizationService} from '../services/organization.service';
import {HierarchicalLevelsService} from '../services/hierarchical-levels.service';
import {AlertsService} from 'angular-alert-module';
import {ActivatedRoute} from '@angular/router';
import {ReturnModel} from '../shared/returnModel';
import swal from 'sweetalert2';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss'],
  // template: 'passed in {{ data.name }}'
})
export class OrganizationFormComponent implements OnInit {
  organization: Organization = new Organization();
  hierarchicalLevels: HierarchicalLevel[];
  idPadre: number;
  resultPost: ReturnModel<Organization>;
  constructor(public dialogRef: MatDialogRef<OrganizationFormComponent>, private hierarchicalLevelsService: HierarchicalLevelsService,
              private organizationService: OrganizationService, private alerts: AlertsService,
              private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.idPadre = this.data.idPadre;
    this.hierarchicalLevelsService.getHierarchicalLevels().subscribe(level => this.hierarchicalLevels = level);
  }

  onSubmit() {
    this.organization.idPadre = this.idPadre;
    this.organizationService.saveOrganization(this.organization).subscribe(resultado => this.validateResult(resultado));
    // const result = this.organizationService.saveOrganization(this.organization);
  }
  validateResult(result: ReturnModel<Organization>) {
    if (result['code'] === 1) {
       this.dialogRef.close();
      swal('Estructura Organizacional', 'El área fue creado correctamente', 'success').then(
        () => {
           location.reload();
        });
    } else {
      // this.alerts.setMessage(result['message'], 'error');
      swal('Estructura Organizacional', result['message'], 'warning').then(
        () => {
          // location.reload();
        });
    }
  }
}
