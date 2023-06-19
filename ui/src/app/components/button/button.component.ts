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

  @Input() disabled?: boolean;
  @Input() variant: Variant = 'contained';
  @Input() size: Size = 'medium';
  @Input() href?: string;
  @Input() class?: string;

  styles = variants;
  sizes = sizes;
  states = states;
}

const states = {
  disabled:
    'cursor-not-allowed select-none pointer-events-none !bg-gray-300 !text-gray-400',
};

const sizes = {
  medium: 'text-sm py-2 px-10',
  small: 'text-[0.625rem] py-1 px-8',
  large: 'text-xl py-4 px-12',
};

const variants = {
  base: 'active:scale-[0.95] transition-all w-full py-2 px-10 rounded-full flex justify-center items-center font-extrabold text-center',
  contained: 'hover:bg-primary-500 bg-primary-400 text-white',
  outlined:
    'hover:border-primary-500 hover:text-primary-500 bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-100/50',
};
