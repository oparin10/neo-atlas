import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styles: [],
})
export class TextInputComponent {
  @Input() label?: string = 'Label Placeholder';
}
