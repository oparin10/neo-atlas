import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Variant = 'contained' | 'outlined';
export type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input() variant: Variant = 'contained';
  @Input() size: Size = 'medium';
  @Input() href?: string;

  styles = variants;
  sizes = sizes;
}

const sizes = {
  medium: 'text-sm py-2 px-10',
  small: 'text-[0.625rem] py-1 px-8',
  large: 'text-lg py-2 px-12',
};

const variants = {
  base: 'active:scale-[0.95] transition-all w-full text-sm py-2 px-10 rounded-full flex justify-center items-center font-extrabold text-center',
  contained: 'hover:bg-primary-500 bg-primary-400 text-white',
  outlined:
    'hover:border-primary-500 hover:text-primary-500 bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-100/50',
};
