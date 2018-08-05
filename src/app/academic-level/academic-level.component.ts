import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridOptions} from 'ag-grid/main';
import {MatRadioComponent} from '../mat-select/mat-select.component';
import {MatCheckboxComponent} from '../mat-checkbox/mat-checkbox.component';
import {InputComponent} from '../input/input.component';
import {DomSanitizer} from '@angular/platform-browser';
import {TypeContactFormComponent} from '../type-contact-form/type-contact-form.component';
import {AcademicLevelFormComponent} from '../academic-level-form/academic-level-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-academic-level',
  templateUrl: './academic-level.component.html',
  styleUrls: ['./academic-level.component.scss']
})
export class AcademicLevelComponent implements OnInit {
  public gridOptions: GridOptions;
  title = 'List Academic Levels';
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowSelection;
  rowData: any;
  result: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {
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
    this.rowData = this.http.get('http://localhost:8080/academicLevel');
  }
  onCellValueChanged(params: any) {

    console.log(JSON.stringify(params.data));
    return this.http.put('http://localhost:8080/academicLevel', JSON.stringify(params.data),  {headers: {
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
  openNewAcademicLevelForm() {
    this.dialog.open(AcademicLevelFormComponent, {width: '500px', height: '300px'});
  }
}
