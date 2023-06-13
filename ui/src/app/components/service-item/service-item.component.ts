import { Component, Input, Type } from '@angular/core';

export type ServiceItem = {
  icon: Type<any>;
  title: string;
  text: string;
};

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styles: [],
})
export class ServiceItemComponent {
  @Input() icon!: Type<any>;
  @Input() title: string = 'Placeholder title';
  @Input() text: string = 'Lorem ipsum dolum salet amet inut conoscie';
}
