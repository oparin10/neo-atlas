import { Component, Input, Type } from '@angular/core';
import { RocketIconSvgComponent } from 'src/app/svg/rocket-icon-svg/rocket-icon-svg.component';

export type ProcessCardComponentType = {
  icon: Type<any>;
  title: string;
  text: string;
};
@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styles: [],
})
export class ProcessCardComponent {
  @Input() icon: Type<any> = RocketIconSvgComponent;
  @Input() title: string = 'Placeholder';
  @Input() text: string = 'Lorem ipsum dolum salet schepazi daertirus';
}
