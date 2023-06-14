import { Directive, ElementRef, HostListener } from '@angular/core';

export const maskPhoneNumber = (val: string): string => {
  const v = val.replace(/\D/g, '').slice(0, 11);
  if (v.length > 7) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 3)}-${v.slice(3, 7)}-${v.slice(7)}`;
  } else if (v.length > 3) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 3)}-${v.slice(3)}`;
  } else if (v.length > 2) {
    return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  }
  return v;
};

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.el.nativeElement.value = value;

    const maskedValue = maskPhoneNumber(value);
    this.el.nativeElement.value = maskedValue;
  }
}
