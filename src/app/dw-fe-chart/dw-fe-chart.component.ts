import {Component, OnInit} from '@angular/core';
import {DwfechartService} from '../services/dwfechart.service';
import {Dwfechart} from '../shared/dwfechart';

@Component({
  selector: 'app-dw-fe-chart',
  templateUrl: './dw-fe-chart.component.html',
  styleUrls: ['./dw-fe-chart.component.scss']
})
export class DwFeChartComponent implements OnInit {

  dimensiones = [
    {value: 'AreaOrganizacion', viewValue: 'Area Organizacion'},
    {value: 'DimTipoAccidente', viewValue: 'Tipo Accidente'},
    {value: 'LevelRisk', viewValue: 'Nivel de Riesgo'}
  ];
  gestion;
  /*
    gestion = [
      {value: '2010', viewValue: '2010'},
      {value: '2011', viewValue: '2011'},
      {value: '2012', viewValue: '2012'},
      {value: '2013', viewValue: '2013'},
      {value: '2014', viewValue: '2014'},
      {value: '2015', viewValue: '2015'},
      {value: '2016', viewValue: '2016'},
      {value: '2017', viewValue: '2017'},
      {value: '2018', viewValue: '2018'}
    ];
    gestion2 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    */
  selectedValue: string;
  selectedGesIni: String;
  selectedGesFin: String;

  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public dwfechart: Dwfechart;
  public lable;
  public barChartType = 'bar';
  public barChartLegend = true;


  constructor(private dwfcechartservice: DwfechartService) {
    this.dwfcechartservice.getReportinDataChart('AreaOrganizacion').subscribe(
      result => {
        this.dwfechart = result;
        console.log(result);
        this.lable = this.dwfechart.chartLabels;
        this.gestion = this.dwfechart.chartLabels.sort();
      }
    );
  }

  ngOnInit() {
  }

  getChart(dimension: String) {
    this.dwfcechartservice.getReportinDataChart(dimension).subscribe(
      result => {
        this.dwfechart = result;
        this.lable = this.dwfechart.chartLabels;
        console.log(result);
      }
    );
  }

  getChartRan(dimension: String, ini: String, fn: String) {
    this.dwfcechartservice.getReportinDataChartRan(dimension, ini, fn).subscribe(
      result => {
        this.dwfechart = result;
        this.lable = this.dwfechart.chartLabels;
        console.log(result);
      }
    );
  }

}
