import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EquipmentAssignmentFormComponent} from '../equipment-assignment-form/equipment-assignment-form.component';
import {PoliticFormComponent} from '../politic-form/politic-form.component';
import {Politic} from '../shared/politic';
import {PoliticsService} from '../services/politics.service';
import {EquipmentAssignmentViewComponent} from '../equipment-assignment-view/equipment-assignment-view.component';
import {PoliticFormEditComponent} from '../politic-form/politic-form-edit.component';
import {PoliticFormViewComponent} from '../politic-form/politic-form-view.component';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

  politics: Politic[] = [];

  constructor(
    private politicsService: PoliticsService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadPolitics();
    this.politicsService.loadPolitics.subscribe(
      (reload) => {
        if (reload) {
          this.loadPolitics();
          this.politicsService.loadPolitics.next(false);
        }
      }
    );
  }

  private loadPolitics() {
    this.politicsService.getPolitics()
      .subscribe(politics => {
        this.politics = politics;
      });
  }

  openNewPolitic() {
    this.dialog.open(PoliticFormComponent, {width: '900px', height: '550px'});
  }

  openViewForm(politic: Politic): void {
    const dialogRef = this.dialog.open(PoliticFormViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.politic = politic;
  }

  openEditForm(politic: Politic): void {
    const dialogRef = this.dialog.open(PoliticFormEditComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.politic = politic;
  }

  openDeleteForm(politic: Politic): void {
    const dialogRef = this.dialog.open(PoliticFormViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.politic = politic;
    instance.modeDelete = true;
  }
}
