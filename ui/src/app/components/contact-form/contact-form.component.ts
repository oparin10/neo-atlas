import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }
  createForm(): FormGroup<{
    name: FormControl<string | null>;
    phone: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
  }> {
    return new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }
}
