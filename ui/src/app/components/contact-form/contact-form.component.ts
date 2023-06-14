import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// regex pattern (99) 9-9999-9999
const PATTERN = /^\(\d{2}\)\s\d-\d{4}-\d{4}$/;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() formSubmitted = new EventEmitter<(typeof this.form)['value']>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(PATTERN),
      Validators.minLength(11),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    message: new FormControl('', []),
  });

  onPhoneChange(value: string) {
    this.form.controls.phone.patchValue(value);
  }

  onSubmit() {
    this.formSubmitted.emit(this.form.value);
  }
}
