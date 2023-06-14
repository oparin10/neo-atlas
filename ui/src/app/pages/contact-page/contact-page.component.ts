import { Component } from '@angular/core';

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

  onSubmit(event: 'success' | 'error') {
    if (event === 'success') {
      this.toggleDialog();
    } else {
      console.log(
        'Ocorreu um erro ao enviar o formulário, tente novamente mais tarde.'
      );
    }
  }
}
