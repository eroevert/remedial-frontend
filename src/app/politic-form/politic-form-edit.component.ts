import {Component, OnInit} from '@angular/core';
import {PoliticsService} from '../services/politics.service';
import {PoliticFormComponent} from './politic-form.component';
import {Politic, PoliticNotification} from '../shared/politic';
import {AlertsService} from 'angular-alert-module';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-politic-form-edit',
  templateUrl: './politic-form-edit.component.html',
  styleUrls: ['./politic-form-edit.component.scss']
})
export class PoliticFormEditComponent implements OnInit {

  public politic: Politic;
  private politicNotification: PoliticNotification;
  constructor(
    private alerts: AlertsService,
    private politicsService: PoliticsService,
    public dialogRef: MatDialogRef<PoliticFormComponent>) {
      this.politicNotification = new PoliticNotification();
  }

  ngOnInit() {
    this.politicsService.getPoliticById(this.politic.politicsKey).subscribe(
      (result) => {
        this.politic = result.object;
      }
    );
  }

  public update(): void {
    try {
      this.politicNotification.politic = this.politic;
      this.politicsService.updatePolitic(this.politicNotification.politic).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al actualizar la Politica.', 'error');
        } else {
          this.alerts.setMessage('La Politica se actualizo correctamente', 'success');
          this.politicsService.loadPolitics.next(true);
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al guardar la politica.', 'error');
    }
  }

}
