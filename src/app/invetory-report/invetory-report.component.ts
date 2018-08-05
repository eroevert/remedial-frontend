import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-invetory-report',
  templateUrl: './invetory-report.component.html',
  styleUrls: ['./invetory-report.component.scss']
})
export class InvetoryReportComponent implements OnInit {

  public gridOptions: GridOptions;
  title = 'Reporte de inventarios';
  rowData: any;

  constructor(private http: HttpClient, public domSanitizer: DomSanitizer) {
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnDefs(),
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48, // recommended row height for material design data grids,
      animateRows: true
    };
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Type Equipment',
        field: 'equipmentByEquipmentKey.equipmentTypeByEquipmentTypeKey.name'
      }, {
        headerName: 'Name',
        field: 'equipmentByEquipmentKey.name'
      }, {
        headerName: 'Code',
        field: 'equipmentByEquipmentKey.code'
      }, {
        headerName: 'Provider',
        field: 'providerByProviderKey.name'
      }, {
        headerName: 'Date Input',
        field: 'date'
      }, {
        headerName: 'Quantity',
        field: 'quantity'
      }, {
        headerName: 'Unit Price',
        field: 'unitPrice'
      }
    ];
  }

  ngOnInit() {
    this.rowData = this.http.get('http://localhost:8080/inventory_report');
  }


}
