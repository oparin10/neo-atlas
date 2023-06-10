import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styles: [],
})
export class PhoneNumberComponent {
  @Input() location?: string = 'Placeholder location';
  @Input() phone?: string = '(99) 9-9999-9999';
}
