// inject styling as a directive to the text field component

import { AfterViewInit, Directive, ElementRef, ViewChild } from '@angular/core';
import { TextFieldWrapper } from './text-field-wrapper.component';
import { styles_tw } from './styles';

@Directive({
  selector: 'input[textField]',
  host: {
    class: styles_tw.input.base,
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
