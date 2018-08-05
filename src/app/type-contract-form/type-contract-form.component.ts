import {Component, Inject, OnInit} from '@angular/core';
import {ReturnModel} from '../shared/returnModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import swal from 'sweetalert2';
import {TypeContract} from '../shared/typeContract';
import {TypeContractService} from '../services/type-contract.service';

@Component({
  selector: 'app-type-contract-form',
  templateUrl: './type-contract-form.component.html',
  styleUrls: ['./type-contract-form.component.scss']
})
export class TypeContractFormComponent implements OnInit {

  typeContract: TypeContract = new TypeContract();
  resultPost: ReturnModel<TypeContract>;
  constructor(public dialogRef: MatDialogRef<TypeContractFormComponent>,
              private typeContractService: TypeContractService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onSubmit() {

    this.typeContractService.saveTypeContract(this.typeContract).subscribe(resultado => this.validateResult(resultado));
  }
  validateResult(result: ReturnModel<TypeContract>) {
    if (result['code'] === 1) {
      this.dialogRef.close();
      swal('New Type contract', `Type contact
             ${this.typeContract.name} create Correctly`, 'success').then(
        () => {
          location.reload();
        });
    } else {
      // this.alerts.setMessage(result['message'], 'error');
      swal('New Type contract', result['message'], 'error');
    }
  }
}
