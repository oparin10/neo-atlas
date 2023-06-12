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
  base: 'active:scale-[0.95] transition-all w-full text-sm py-2 px-10 rounded-full flex justify-center items-center font-extrabold text-center',
  contained: 'hover:bg-primary-500 bg-primary-400 text-white',
  outlined:
    'hover:border-primary-500 hover:text-primary-500 bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-100/50',
};
