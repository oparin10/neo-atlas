import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';

// regex pattern (99) 9-9999-9999
const PATTERN = /^\(\d{2}\)\s\d-\d{4}-\d{4}$/;

export type ContactFormValue = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() onFormSubmit = new EventEmitter<'success' | 'error'>();

  constructor(private formService: ContactFormService) {}

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
    const form = this.form;
    if (form.valid) {
      const formData = form.value;

      this.formService.postContactForm(formData as ContactFormValue).subscribe({
        next: (response) => {
          console.log('Form data successfully submitted:', response);

          this.onFormSubmit.emit('success');
        },
        error: (error) => {
          console.error('An error occurred while submitting the form:', error);

          this.onFormSubmit.emit('error');
        },
      });
    }
  }
}
