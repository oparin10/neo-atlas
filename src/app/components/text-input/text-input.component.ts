import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent {
  @Input() label?: string = 'Label Placeholder';
  @Input() error?: boolean;
  @Input() errorText?: string = '\u00A0';

  @Output() value = new EventEmitter<string>();
  onChange(value: string) {
    this.value.emit(value);
  }
}
