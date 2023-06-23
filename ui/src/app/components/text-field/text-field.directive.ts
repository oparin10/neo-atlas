// inject styling as a directive to the text field component

import { Directive } from '@angular/core';

@Directive({
  selector: 'input[textField]',
  host: {
    class: 'text-red-500',
  },
})
export class TextFieldDirective {}
