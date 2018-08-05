import {Component, Inject, OnInit} from '@angular/core';
import {Organization} from '../shared/organization';
import {OrganizationService} from '../services/organization.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {OrganizationFormComponent} from '../organization-form/organization-form.component';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  organizations: Organization[];
  selectedOrganization: Organization;
  constructor(private organizationService: OrganizationService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog ) { }

  ngOnInit() {
    this.organizationService.getOrganizations().subscribe(organization => this.organizations = organization['object']);
  }

  onSelect(item: Organization) {
    this.selectedOrganization = item;
  }
  openNewOrganizationForm() {
    this.dialog.open(OrganizationFormComponent, {width: '500px', height: '450px'});
  }

}
