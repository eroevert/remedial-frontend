import {Component, Inject, OnInit} from '@angular/core';
import {ReturnModel} from '../shared/returnModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TypeContact} from '../shared/typeContact';
import {TypeContactService} from '../services/type-contact.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-type-contact-form',
  templateUrl: './type-contact-form.component.html',
  styleUrls: ['./type-contact-form.component.scss']
})
export class TypeContactFormComponent implements OnInit {

  typeContact: TypeContact = new TypeContact(0, '');
  resultPost: ReturnModel<TypeContact>;
  constructor(public dialogRef: MatDialogRef<TypeContactFormComponent>,
              private typeContactService: TypeContactService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.typeContactService.saveTypeContact(this.typeContact).subscribe(resultado => this.validateResult(resultado));
  }
  validateResult(result: ReturnModel<TypeContact>) {
    if (result['code'] === 1) {
      this.dialogRef.close();
      swal('New Type contact', `Type contact
             ${this.typeContact.name} create Correctly`, 'success').then(
        () => {
          location.reload();
        });
    } else {
      // this.alerts.setMessage(result['message'], 'error');
      swal('New Type contact', result['message'], 'error');
    }
  }

}
