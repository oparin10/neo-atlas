// inject styling as a directive to the text field component

import { Directive } from '@angular/core';

@Directive({
  selector: 'input[textField]',
  host: {
    class: 'peer relative',
  },
})
export class TextFieldDirective {}
