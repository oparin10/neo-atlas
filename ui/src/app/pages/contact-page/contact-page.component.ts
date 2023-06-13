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
}
