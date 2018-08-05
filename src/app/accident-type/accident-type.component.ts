import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatCheckboxComponent} from '../mat-checkbox/mat-checkbox.component';
import {GridOptions} from 'ag-grid';
import {MatRadioComponent} from '../mat-select/mat-select.component';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-accident-type',
  templateUrl: './accident-type.component.html',
  styleUrls: ['./accident-type.component.scss']
})
export class AccidentTypeComponent implements OnInit {

  public gridOptions: GridOptions;
  title = 'List Accident Types';
  private rowSelection;
  rowData: any;
  result: any;

  constructor(private http: HttpClient) {
    this.rowSelection = 'multiple';
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnDefs(),
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48, // recommended row height for material design data grids,
      animateRows: true,
      frameworkComponents: {
        inputRenderer: InputComponent,
        checkboxRenderer: MatCheckboxComponent
      }
    };
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Name',
        field: 'name',
        cellEditor: 'inputRenderer',
        editable: true
      }, {
        headerName: 'Description',
        field: 'description',
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
    this.rowData = this.http.get('http://localhost:8080/accidentType');
  }

  onCellValueChanged(params: any) {

    console.log(JSON.stringify(params.data));
    return this.http.put('http://localhost:8080/academicLevel', JSON.stringify(params.data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .toPromise()
      .then(() => this.result)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
