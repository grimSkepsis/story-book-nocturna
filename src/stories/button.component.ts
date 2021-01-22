import { Component, Input, Output, EventEmitter } from '@angular/core';

import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes + ' ' + (smallButton ? 'btn-sm' : '')">
    <clr-icon [attr.shape]="iconShape"
    *ngIf="iconShape !== ''"></clr-icon>
    {{ label }}
  </button>`,
  styleUrls: ['./button.less'],
})
export default class ButtonComponent {

  @Input() public classes = "btn";

  @Input() public smallButton = false;

  @Input() public iconShape = "";

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
