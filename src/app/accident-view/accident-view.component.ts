import { Component, OnInit } from '@angular/core';
import {Accidentdata} from '../shared/accidentdata';

@Component({
  selector: 'app-accident-view',
  templateUrl: './accident-view.component.html',
  styleUrls: ['./accident-view.component.scss']
})
export class AccidentViewComponent implements OnInit {

  accident: Accidentdata;
  constructor() { }

  ngOnInit() {
  }

}
