import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styles: [],
})
export class ContactCardComponent {
  @Input() name? = 'Placeholder name';
  @Input() role? = 'Placeholder role';
  @Input() picture? = 'https://placehold.co/600x400';
  @Input() alt? = "AtlasCode's member picture";
}
