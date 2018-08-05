import {Component, Inject, OnInit} from '@angular/core';
import {Organization} from '../shared/organization';
import {OrganizationService} from '../services/organization.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {OrganizationFormComponent} from '../organization-form/organization-form.component';
import {MatDialog} from '@angular/material';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {ItemFormComponent} from '../item-form/item-form.component';
import {AlertsService} from 'angular-alert-module';
import swal from 'sweetalert2';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent implements OnInit {
  organization: Organization;
  childs: Organization[];
  items: Item[];
  id: number;

  constructor(private organizationService: OrganizationService,
              private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location,
              @Inject('BaseURL') public BaseURL,
              public dialog: MatDialog,
              private alerts: AlertsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.organizationService.getOrganization(this.id).subscribe(organization => this.organization = organization['object']);
    this.organizationService.getOrganizationsFather(this.id).subscribe(organization => this.childs = organization['object']);
    this.itemService.getItemsOrganizationKey(this.id).subscribe(item => this.items = item['object']);
  }

  goBack(): void {
    this.location.back();
  }

  openNewOrganizationForm() {
    this.dialog.open(OrganizationFormComponent, {width: '500px', height: '650px', data: {idPadre: this.id}});
  }

  openNewItemForm() {
    this.dialog.open(ItemFormComponent, {width: '500px', height: '550px', data: {organizationKey: this.id}});
  }

  OpenOrganizationDetail(idPadre) {
    this.location.go('/organization/' + idPadre);
    location.reload();
  }

  DeleteOrganization(id) {
    this.organizationService.deleteOrganization(id)
      .subscribe(res => {
        if (res['code'] === 1) {
          swal('Estructura Organizacional', 'El área fue eliminado correctamente', 'success').then(
            () => {
              location.reload();
            });
        } else {
          swal('Estructura Organizacional', res['message'], 'warning').then(
            () => {
              // location.reload();
            });
        }
      }
    );
  }
  DeleteItem(id) {
    this.itemService.deleteItem(id).subscribe(res => {
        if (res['code'] === 1) {
          swal('Item', 'El item fue eliminado correctamente', 'success').then(
            () => {
              location.reload();
            });
        } else {
          swal('Item', res['message'], 'warning').then(
            () => {
              // location.reload();
            });
        }
      }
    );
  }
}
