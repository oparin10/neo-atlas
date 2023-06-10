import { Component, EventEmitter, Input, Output } from '@angular/core';

type Variant = 'contained' | 'outlined';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input() variant: Variant = 'contained';
  @Input() href?: string;

  styles = variants;
}

const variants = {
  base: 'text-sm py-2 px-6 rounded-full flex justify-center items-center font-extrabold text-center',
  contained: 'bg-primary-400 text-white',
  outlined: 'bg-transparent text-primary-400 border border-primary-400',
};
