import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styles: [],
})
export class TextAreaComponent {
  @Input() label?: string = 'Placeholder label';
}
