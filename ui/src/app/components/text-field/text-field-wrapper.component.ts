import { Component, Input } from '@angular/core';
import { styles_tw as styles } from './styles';

@Component({
  selector: 'app-text-field-wrapper',
  templateUrl: './text-field-wrapper.component.html',
})
export class TextFieldWrapper {
  public styles = styles;

  @Input() public label: string = 'Placeholder label';
  @Input() public error? = false;
  @Input() public errorText? = '\u00A0';

  public inputId: string;

  constructor() {
    this.inputId = this.generateUniqueId();
  }

  private generateUniqueId() {
    return Math.random().toString(36).substring(2);
  }
}
