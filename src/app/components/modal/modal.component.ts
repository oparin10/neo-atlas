import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
@Injectable()
export class ModalComponent {
  @Input() open = false;
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }
}
