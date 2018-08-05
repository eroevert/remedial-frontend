///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {ReturnModel} from '../shared/returnModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import swal from 'sweetalert2';
import {AcademicLevel} from '../shared/academicLevel';
import {AcademicLevelService} from '../services/academic-level.service';

@Component({
  selector: 'app-academic-level-form',
  templateUrl: './academic-level-form.component.html',
  styleUrls: ['./academic-level-form.component.scss']
})
export class AcademicLevelFormComponent implements OnInit {

  academicLevel: AcademicLevel = new AcademicLevel();
  resultPost: ReturnModel<AcademicLevel>;
  constructor(public dialogRef: MatDialogRef<AcademicLevelFormComponent>,
              private academicLevelService: AcademicLevelService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.academicLevelService.saveacademicLevel(this.academicLevel).subscribe(resultado => this.validateResult(resultado));
  }
  validateResult(result: ReturnModel<AcademicLevel>) {
    if (result['code'] === 1) {
      this.dialogRef.close();
      swal('New Academic Level', `Academic Level
             ${this.academicLevel.description} create Correctly`, 'success').then(
        () => {
          location.reload();
        });
    } else {
      // this.alerts.setMessage(result['message'], 'error');
      swal('New Academic Level', result['message'], 'error');
    }
  }
}
