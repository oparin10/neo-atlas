import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() value = '';
  public isDisabled = false;
  public changed: (value: string) => void = () => {};
  public touched: (event: Event) => void = () => {};

  @Input() label?: string = 'Label Placeholder';
  @Input() error?: boolean;
  @Input() errorText?: string = '\u00A0';

  public inputId: string;

  constructor() {
    this.inputId = this.generateUniqueId();
  }

  private generateUniqueId() {
    return Math.random().toString(36).substring(2);
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    this.changed(value);
  }

  onBlur(event: Event) {
    this.touched(event);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
