import {Component, OnInit, QueryList, ViewChildren, ViewContainerRef} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ICellEditorAngularComp {
  private params: any;

  private description: string;

  @ViewChildren('input', { read: ViewContainerRef })
  public inputs: QueryList<any>;
  private focusedInput = 0;

  agInit(params: any): void {
    this.params = params;

    // simple implementation - we assume a full name consists of a first and last name only
    this.description = this.params.value;
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  // ngAfterViewInit() {
  //   this.focusOnInputNextTick(this.inputs.first);
  // }

  private focusOnInputNextTick(input: ViewContainerRef) {
    setTimeout(() => {
      input.element.nativeElement.focus();
    }, 0);
  }

  getValue() {
    return `${this.description}`;
  }

  isPopup(): boolean {
    return true;
  }

  /*
   * A little over complicated for what it is, but the idea is to illustrate how you might tab between multiple inputs
   * say for example in full row editing
   */
  onKeyDown(event): void {
    const key = event.which || event.keyCode;
    if (key === 9) {
      // tab
      this.preventDefaultAndPropagation(event);

      // either move one input along, or cycle back to 0
      this.focusedInput = this.focusedInput === this.inputs.length - 1 ? 0 : this.focusedInput + 1;

      const focusedInput = this.focusedInput;
      const inputToFocusOn = this.inputs.find((item: any, index: number) => {
        return index === focusedInput;
      });

      this.focusOnInputNextTick(inputToFocusOn);
    } else if (key === 13) {
      // enter
      // perform some validation on enter - in this example we assume all inputs are mandatory
      // in a proper application you'd probably want to inform the user that an input is blank
      this.inputs.forEach(input => {
        if (!input.element.nativeElement.value) {
          this.preventDefaultAndPropagation(event);
          this.focusOnInputNextTick(input);
        }
      });
    }
  }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
