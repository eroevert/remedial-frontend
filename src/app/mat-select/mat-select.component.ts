import {Component, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import {MatRadioButton} from '@angular/material';

@Component({
  selector: 'radio-cell',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatRadioComponent implements ICellEditorAngularComp {
  private params: any;

  states: any;
  status: any;
  private selectedIndex: number;

  @ViewChildren(MatRadioButton) public options;

  agInit(params: any): void {
    this.params = params;
    this.status = this.params.value;
    this.states = this.params.states;
    console.log(this.status);
    this.selectedIndex = this.states.findIndex(item => {
      return item.id === this.status;
    });
    console.log(this.selectedIndex );
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    this.selectFavouriteFruitBasedOnSelectedIndex();
  }

  private selectFavouriteFruitBasedOnSelectedIndex() {
    this.status = this.states[this.selectedIndex].id;

    // focus on next tick
    const fruitRadio = this.options.find(radio => radio.id === this.status);
    setTimeout(() => {
      fruitRadio.focus();
    }, 0);
  }

  getValue() {
    return this.status;
  }

  isPopup(): boolean {
    return true;
  }

  /*
   * A little over complicated for what it is, but the idea is to illustrate how you might navigate through the radio
   * buttons with up & down keys (instead of finishing editing)
   */
  onKeyDown(event): void {
    const key = event.which || event.keyCode;
    if (key === 38 || key === 40) {
      this.preventDefaultAndPropagation(event);

      if (key === 38) {
        // up
        this.selectedIndex = this.selectedIndex === 0 ? this.states.length - 1 : this.selectedIndex - 1;
      } else if (key === 40) {
        // down
        this.selectedIndex = this.selectedIndex === this.states.length - 1 ? 0 : this.selectedIndex + 1;
      }
      this.selectFavouriteFruitBasedOnSelectedIndex();
    }
  }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}
