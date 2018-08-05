import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatCheckboxComponent} from '../mat-checkbox/mat-checkbox.component';
import {GridOptions} from 'ag-grid';
import {MatRadioComponent} from '../mat-select/mat-select.component';
import {InputComponent} from '../input/input.component';
import {MatDialog} from '@angular/material';
import {TypeContractService} from '../services/type-contract.service';
import {TypeContractFormComponent} from '../type-contract-form/type-contract-form.component';

@Component({
  selector: 'app-type-contract',
  templateUrl: './type-contract.component.html',
  styleUrls: ['./type-contract.component.scss']
})
export class TypeContractComponent implements OnInit {

  public gridOptions: GridOptions;
  title = 'List Type Contracts';
  private rowSelection;
  rowData: any;
  result: any;

  constructor(private http: HttpClient, private typeContractService: TypeContractService,
              @Inject('BaseURL') public BaseURL,
              public dialog: MatDialog) {
    this.rowSelection = 'multiple';
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnDefs(),
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48, // recommended row height for material design data grids,
      animateRows: true,
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
      },
      {
        headerName: 'Code',
        field: 'code',
        cellEditor: 'inputRenderer',
        editable: true
      },
      {
        headerName: 'Is Active',
        field: 'status',
        cellRenderer: 'checkboxRenderer'
      }
    ];
  }

  ngOnInit() {
    this.rowData = this.http.get('http://localhost:8080/typeContract');
  }
  onCellValueChanged(params: any) {

    console.log(JSON.stringify(params.data));
    return this.http.put('http://localhost:8080/typeContract', JSON.stringify(params.data),  {headers: {
        'Content-Type': 'application/json'
      }})
      .toPromise()
      .then(() => this.result)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    // console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  openNewTypeContractForm() {
    this.dialog.open(TypeContractFormComponent, {width: '500px', height: '350px'});
  }
}
