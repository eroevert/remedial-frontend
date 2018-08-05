import {Component, Input, OnInit} from '@angular/core';
import {Accidentdata} from '../shared/accidentdata';

@Component({
  selector: 'app-accidentdetail',
  templateUrl: './accidentdetail.component.html',
  styleUrls: ['./accidentdetail.component.scss']
})
export class AccidentdetailComponent implements OnInit {

  constructor() { }

  @Input()
  accidentdata: Accidentdata;
  @Input()
  accidentkey: number;


  ngOnInit() {
  }

}
