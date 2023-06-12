import { Component } from '@angular/core';
import { ProcessCardComponentType } from '../process-card/process-card.component';
import { ChatIconComponent } from '../../svg/chat-icon/chat-icon.component';
import { PuzzleIconSvgComponent } from '../../svg/puzzle-icon-svg/puzzle-icon-svg.component';
import { RocketIconSvgComponent } from '../../svg/rocket-icon-svg/rocket-icon-svg.component';

@Component({
  selector: 'app-our-process',
  templateUrl: './our-process.component.html',
  styles: [],
})
export class OurProcessComponent {
  items: ProcessCardComponentType[] = [
    {
      icon: ChatIconComponent,
      text: 'Para descobrir o seu problema por meio de pesquisas e aprendizados.',
      title: 'Conversa',
    },
    {
      icon: PuzzleIconSvgComponent,
      text: 'Para estruturar processos e solucionar o seu problema.',
      title: 'Mapeamento',
    },
    {
      icon: RocketIconSvgComponent,
      text: 'Para transformar nossas ideias em realidade.',
      title: 'Execução',
    },
  ];
}
