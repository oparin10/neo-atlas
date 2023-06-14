import { Component } from '@angular/core';
import { FormSubmissionResult } from 'src/app/components/contact-form/contact-form.types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styles: [],
})
export class ContactPageComponent {
  dialogOpen = false;

  toggleDialog() {
    this.dialogOpen = !this.dialogOpen;
  }

  onSubmit(event: FormSubmissionResult) {
    if (event.type === 'success') {
      console.log(event.response);
      this.toggleDialog();
    } else {
      console.error(
        'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde.',
        event.error
      );
    }
  }
}
