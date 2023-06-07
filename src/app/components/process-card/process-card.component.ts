import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styles: [],
})
export class ProcessCardComponent {
  @Input() title: string = 'Placeholder';
  @Input() text: string = 'Lorem ipsum dolum salet schepazi daertirus';
}
