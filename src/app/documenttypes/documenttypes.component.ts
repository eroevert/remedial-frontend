import {Component, OnInit} from '@angular/core';
import {DocumenttypeService} from '../services/documenttype.service';
import {Documenttype} from '../shared/documenttype';


@Component({
  selector: 'app-documenttypes',
  templateUrl: './documenttypes.component.html',
  styleUrls: ['./documenttypes.component.scss']
})
export class DocumenttypesComponent implements OnInit {
  documenttypes: Documenttype[];

  constructor(private documenttypeservice: DocumenttypeService) {
  }

  ngOnInit() {
    this.documenttypeservice.getDocumenttypes()
      .subscribe(documenttypes =>
        this.documenttypes = documenttypes);
  }

  delete(documenttype: Documenttype): void {
    console.log(documenttype);
    this.documenttypeservice.deleteDocumenttype(documenttype.documentTypeKey)
      .subscribe(responce => this.documenttypes = this.documenttypes.filter(dt => dt !== documenttype));

  }
}
