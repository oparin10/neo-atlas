import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormValue } from '../components/contact-form/contact-form.component';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private _API_URL =
    'https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/atlascode';

  private API_URL = '';

  constructor(private http: HttpClient) {}

  postContactForm(form: ContactFormValue) {
    return this.http.post(this.API_URL, form);
  }
}
