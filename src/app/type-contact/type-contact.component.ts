import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatCheckboxComponent} from '../mat-checkbox/mat-checkbox.component';
import {GridOptions} from 'ag-grid';
import {MatRadioComponent} from '../mat-select/mat-select.component';
import {InputComponent} from '../input/input.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TypeContactFormComponent} from '../type-contact-form/type-contact-form.component';
import swal from 'sweetalert2';
import {TypeContactService} from '../services/type-contact.service';
import {TypeContact} from '../shared/typeContact';

@Component({
  selector: 'app-type-contact',
  templateUrl: './type-contact.component.html',
  styleUrls: ['./type-contact.component.scss']
})
export class TypeContactComponent implements OnInit {
  private gridApi;
  public gridOptions: GridOptions;
  title = 'List Type Contacts';
  rowSelection: any;
  rowData: any;
  result: any;
  typeContacts: TypeContact[];

  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private typeContactService: TypeContactService) {
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnDefs(),
      // onGridReady: () => {
      //   this.gridOptions.api.sizeColumnsToFit();
      // },
      rowHeight: 35, // recommended row height for material design data grids,
      animateRows: true,
      rowSelection: 'single',
      frameworkComponents: {
        radioEditor: MatRadioComponent,
        inputRenderer: InputComponent,
        checkboxRenderer: MatCheckboxComponent
      }
    };
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Description',
        field: 'name',
        cellEditor: 'inputRenderer',
        editable: true
      }
    ];
  }

  ngOnInit() {
    this.rowData = this.http.get('http://localhost:8080/typeContact');
  }

  onCellValueChanged(params: any) {

    console.log(JSON.stringify(params.data));
    return this.http.put('http://localhost:8080/typeContact', JSON.stringify(params.data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .toPromise()
      .then(() => this.result)
      .catch(this.handleError);
  }
  delete(id: number, name: string) {
    console.log('llego al delete');
    swal({
      title: 'Confirmacion...',
      text: 'Estas seguro que deseas eliminar el tipo de contacto: ' + name,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.typeContactService.deleteTypeContact(id)
          .subscribe(responce => {
            console.log(JSON.stringify(responce));
            if (responce['code'] === 1) {
              swal('Eliminar Tipo Contacto', 'El tipo de contacto ' + name + ' fue Eliminado Correctamente', 'success').then(
                () => {
                  location.reload();
                });
            } else {
              swal('Error....', 'No se pudo eliminar porque tiene referencias al tipo de contacto', 'warning');
            }
          });
      }
    });
  }

  deleteRowselected() {
    for (const selectedRow of this.gridApi.getSelectedRows()) {
      console.log(selectedRow.name);
      this.delete(selectedRow.typeContactKey, selectedRow.name);
    }
  }

  openNewTypeContactForm() {
    this.dialog.open(TypeContactFormComponent, {width: '500px', height: '300px'});
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridOptions.api.sizeColumnsToFit();
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
