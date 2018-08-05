import { Component, OnInit } from '@angular/core';
import {AuditoryService} from '../services/auditory.service';
import {Auditory} from '../shared/auditory';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.component.html',
  styleUrls: ['./auditory.component.scss']
})
export class AuditoryComponent implements OnInit {

  auditories: Auditory[];

  constructor(private auditoryService: AuditoryService) {
    this.auditories = [];
  }

  ngOnInit() {
    this.auditoryService.getAuditories().subscribe(value => {
      this.auditories = value.object;
    });
  }

}
