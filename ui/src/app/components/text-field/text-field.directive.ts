// inject styling as a directive to the text field component

import { Directive } from '@angular/core';

@Directive({
  selector: 'input[textField]',
  host: {
    class:
      'peer focus:ring-0 border-none w-full rounded-[inherit] text-sm py-3',
  },
})
export class TextFieldDirective {}
