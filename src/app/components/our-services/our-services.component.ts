import { Component } from '@angular/core';
import { ServiceItem } from '../service-item/service-item.component';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styles: [],
})
export class OurServicesComponent {
  services: ServiceItem[] = [];
}
