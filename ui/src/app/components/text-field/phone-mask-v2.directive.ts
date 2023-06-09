import { Directive, ElementRef, HostListener } from '@angular/core';

export const maskPhoneNumber = (val: string): string => {
  const v = val.replace(/\D/g, '').slice(0, 11);
  if (v.length >= 7) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 3)}-${v.slice(3, 7)}-${v.slice(7)}`;
  } else if (v.length >= 3) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 3)}-${v.slice(3)}`;
  } else if (v.length >= 2) {
    return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  }
  return v;
};

@Directive({
  selector: '[phoneMask]',
})
export class PhoneMaskDirectiveV2 {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  lastKey = '';

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.lastKey = event.key;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    if (this.lastKey === 'Backspace') {
      this.lastKey = '';
      return;
    }

    const maskedValue = maskPhoneNumber(value);

    this.el.nativeElement.value = maskedValue;
  }
}
