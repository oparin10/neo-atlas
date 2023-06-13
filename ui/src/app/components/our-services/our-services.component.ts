import { Component } from '@angular/core';
import { ServiceItem } from '../service-item/service-item.component';
import { ServiceIconOneComponent } from 'src/app/svg/service-icon-one/service-icon-one.component';
import { ServiceIconTwoComponent } from 'src/app/svg/service-icon-two/service-icon-two.component';
import { ServiceIconThreeComponent } from 'src/app/svg/service-icon-three/service-icon-three.component';
import { ServiceIconFourComponent } from 'src/app/svg/service-icon-four/service-icon-four.component';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styles: [],
})
export class OurServicesComponent {
  services: ServiceItem[] = [
    {
      icon: ServiceIconOneComponent,
      title: 'Design thinking',
      text: 'Planejamos e organizamos dinâmicas para discovery.',
    },
    {
      icon: ServiceIconTwoComponent,
      title: 'Design de Interfaces',
      text: 'Criação de fluxos de telas com protótipos de alta fidelidade.',
    },
    {
      icon: ServiceIconThreeComponent,
      title: 'Análise Heurística',
      text: 'Identificação de problemas, insights e dicas de otimização.',
    },
    {
      icon: ServiceIconFourComponent,
      title: 'Desenvolvimento Web',
      text: 'Transforme suas ideias em soluções digitais de sucesso.',
    },
  ];
}
