import {Component, OnInit} from '@angular/core';
import {Documenttype} from '../shared/documenttype';
import {DocumenttypeService} from '../services/documenttype.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  documenttype: Documenttype = new Documenttype();

  constructor(private documenttypeservice: DocumenttypeService, private router: Router) {
  }

  ngOnInit() {
  }

  public create(): void {
    this.documenttypeservice.createDocumenttype(this.documenttype).subscribe(
      response => this.router.navigate(['/documenttypes'])
    );
  }

}
