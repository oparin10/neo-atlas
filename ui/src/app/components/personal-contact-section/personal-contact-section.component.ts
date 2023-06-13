import { Component, Input } from '@angular/core';
import { ContactCardType } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-personal-contact-section',
  templateUrl: './personal-contact-section.component.html',
  styles: [],
})
export class PersonalContactSectionComponent {
  @Input() contactCards: ContactCardType[] = [
    {
      alt: 'Foto - Alexandre Fritsch - Membro de Atlas Code',
      name: 'Alexandre Fritsch',
      picture: '/assets/contact-card-photo-2.png',
      role: 'UI/UX Designer',
    },
    {
      alt: 'Foto - Aleksandr Mirovski - Membro de Atlas Code',
      name: 'Aleksandr Mirovski',
      picture: '/assets/contact-card-photo-1.png',
      role: 'Fullstack Developer',
    },
  ];
}
