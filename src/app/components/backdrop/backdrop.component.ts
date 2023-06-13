import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(300)]),
    ]),
  ],
})
export class BackdropComponent {
  @Input() open = false;
  @Output() onClick = new EventEmitter<void>();
  @Output() onCloseButtonClick = new EventEmitter<void>();

  onCloseButtonClickHandler() {
    this.onCloseButtonClick.emit();
  }

  onBackdropClick(): void {
    // if is child component, do not emit

    this.onClick.emit();
  }
}
