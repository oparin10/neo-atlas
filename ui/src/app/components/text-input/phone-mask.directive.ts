import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
  private pattern = /^\(\d{2}\)\s\d-\d{4}-\d{4}$/;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const maskedValue = value
      .replace(/\D/g, '') // remove non-digits
      .slice(0, 11) // limit to 11 digits
      .replace(/^(\d{2})(\d)/g, '($1) $2') // add parentheses and space after first two digits
      .replace(/(\d)(\d{4})$/, '$1-$2'); // add dash before last four digits

    if (this.pattern.test(maskedValue)) {
      this.el.nativeElement.value = maskedValue;
    } else {
      this.el.nativeElement.value = '';
    }
  }
}
