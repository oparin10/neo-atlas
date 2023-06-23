// inject styling as a directive to the text field component

import { AfterViewInit, Directive, ElementRef, ViewChild } from '@angular/core';
import { TextFieldWrapper } from './text-field-wrapper.component';

@Directive({
  selector: 'input[textField]',
  host: {
    class:
      'peer focus:ring-0 border-none w-full rounded-[inherit] text-sm py-3',
  },
})
export class TextFieldDirective implements AfterViewInit {
  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private textFieldWrapper: TextFieldWrapper
  ) {}

  ngAfterViewInit(): void {
    if (this.textFieldWrapper) {
      const inputElement = this.elementRef.nativeElement;

      inputElement.id = this.textFieldWrapper.inputId;
    }
  }
}
