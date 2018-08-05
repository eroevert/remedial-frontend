import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/main';

@Component({
  selector: 'checkbox-cell',
  templateUrl: './mat-checkbox.component.html',
  styleUrls: ['./mat-checkbox.component.scss']
})
export class MatCheckboxComponent implements ICellRendererAngularComp {
  private params: any;

  checked = false;

  agInit(params: any): void {
    this.params = params;
    this.checked = this.params.value === '1';
  }

  // demonstrates how you can do "inline" editing of a cell
  onChange(checked: boolean) {
    this.checked = checked;
    this.params.node.setDataValue(this.params.colDef, this.checked ? '1' : '0');
  }

  refresh(params: any): boolean {
    return false;
  }
}
