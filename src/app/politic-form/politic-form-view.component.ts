import { Component, OnInit } from '@angular/core';
import {PoliticsService} from '../services/politics.service';
import {PoliticFormComponent} from './politic-form.component';
import {Politic} from '../shared/politic';
import {AlertsService} from 'angular-alert-module';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-politic-form-view',
  templateUrl: './politic-form-view.component.html',
  styleUrls: ['./politic-form-view.component.scss']
})
export class PoliticFormViewComponent implements OnInit {

  public politic: Politic;
  public modeDelete = false;

  constructor(
    private alerts: AlertsService,
    private politicsService: PoliticsService,
    public dialogRef: MatDialogRef<PoliticFormComponent>) {
  }

  ngOnInit() {
    this.politicsService.getPoliticById(this.politic.politicsKey).subscribe(
      (result) => {
        this.politic = result.object;
      }
    );
  }

  delete(politic: Politic): void {
    try {
      this.politicsService.deletePolitic(this.politic).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al eliminar la Politica.', 'error');
        } else {
          this.alerts.setMessage('La Politica se eliminó correctamente', 'success');
          this.politicsService.loadPolitics.next(true);
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al eliminar la Politica.', 'error');
    }
  }

}
