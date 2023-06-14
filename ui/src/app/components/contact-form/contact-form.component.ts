import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

// regex pattern (99) 9-9999-9999
const PATTERN = /^\(\d{2}\)\s\d-\d{4}-\d{4}$/;

const maskInput = (string: string) => {
  const maskedValue = string
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');

  return maskedValue;
};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() formSubmitted = new EventEmitter<(typeof this.form)['value']>();

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(PATTERN),
      Validators.minLength(15),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  justLog(value: string) {
    console.log(value);
  }

  onPhoneChange(value: string) {
    console.log(value);
    // this.form.get('phone')?.setValue(value);

    this.form.controls.phone.setValue(value);
  }

  onSubmit() {
    console.log(this.form);
    this.formSubmitted.emit(this.form.value);
  }
}
