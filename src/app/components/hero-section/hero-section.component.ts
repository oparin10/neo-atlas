import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styles: [],
})
export class HeroSectionComponent {
  handleClick(event: MouseEvent): void {
    console.log('Button clicked', event);
  }
}
