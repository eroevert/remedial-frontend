import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DwfetableService} from '../services/dwfetable.service';
import {DwfechartService} from '../services/dwfechart.service';
import {Dwfechart} from '../shared/dwfechart';

@Component({
  selector: 'app-dw-fe-table',
  templateUrl: './dw-fe-table.component.html',
  styleUrls: ['./dw-fe-table.component.scss']
})
export class DwFeTableComponent implements OnInit {
  public dwfechart: Dwfechart;
  gestion;

  constructor(private dwfetableservice: DwfetableService, private dwfcechartservice: DwfechartService) {
    this.dwfcechartservice.getReportinDataChart('AreaOrganizacion').subscribe(
      result => {
        this.dwfechart = result;
        this.gestion = this.dwfechart.chartLabels.sort();
      }
    );
  }

  dimensiones = [
    {value: 'AreaOrganizacion', viewValue: 'Area Organizacion'},
    {value: 'DimEmpleado', viewValue: 'Empleado'},
    {value: 'DimTipoAccidente', viewValue: 'Tipo Accidente'},
    {value: 'LevelRisk', viewValue: 'Nivel de Riesgo'}
  ];

  // gestion = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  selectedValue: string;
  selectedGesIni: String;
  selectedGesFin: String;
  displayedColumns = ['Dimension', 'NroIncidentes', 'Gestion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  getdatareportingrang(dimension: string, gestIni: String, gestFin: String) {
    this.dwfetableservice.getReportinDataRang(dimension, gestIni, gestFin).subscribe(
      results => {
        if (!results) {
          return;
        }
        // console.log(results);
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.paginator = this.paginator;
      }
    );

  }

  getdatareporting(dimension: string) {
    this.dwfetableservice.getReportinData(dimension).subscribe(
      results => {
        if (!results) {
          return;
        }
        // console.log(results);
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.paginator = this.paginator;
      }
    );

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

