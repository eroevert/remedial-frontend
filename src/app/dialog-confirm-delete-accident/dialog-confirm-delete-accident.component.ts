import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AlertsService} from 'angular-alert-module';
import {Accidentdata} from '../shared/accidentdata';
import {AccidentService} from '../services/accident.service';

@Component({
  selector: 'app-dialog-confirm-delete-accident',
  templateUrl: './dialog-confirm-delete-accident.component.html',
  styleUrls: ['./dialog-confirm-delete-accident.component.scss']
})
export class DialogConfirmDeleteAccidentComponent implements OnInit {

  accident: Accidentdata;

  constructor(public dialogRef: MatDialogRef<DialogConfirmDeleteAccidentComponent>, private accidentService: AccidentService,
              private alerts: AlertsService) { }

  ngOnInit() {
  }

  confirmar() {
    try {
      this.accidentService.deleteAssignment(this.accident).subscribe(response => {
        this.dialogRef.close();
        if (response['code'] === -1) {
          this.alerts.setMessage('Ocurrió un error al eliminar el accidente.', 'error');
        } else {
          this.alerts.setMessage('El accidente se eliminó correctamente', 'success');
          location.reload();
        }
      });
    } catch (e) {
      this.alerts.setMessage('Ocurrió un error al eliminar el accidente.', 'error');
    }
  }

}
