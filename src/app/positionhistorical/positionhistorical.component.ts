import {Component, OnInit} from '@angular/core';
import {PositionhistoricalService} from '../services/positionhistorical.service';
import {PositionHistorical} from '../shared/positionHistorical';


@Component({
  selector: 'app-positionhistorical',
  templateUrl: './positionhistorical.component.html',
  styleUrls: ['./positionhistorical.component.scss']
})
export class PositionhistoricalComponent implements OnInit {
  positionH: PositionHistorical[];

  constructor(private phservice: PositionhistoricalService) {
  }

  ngOnInit() {
    /*this.phservice.getPositionHistoricalEmp()
      .subscribe(positionH => this.positionH = positionH);*/
  }

}
