import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
