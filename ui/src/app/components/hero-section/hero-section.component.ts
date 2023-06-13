import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styles: [],
})
export class HeroSectionComponent {
  onClick(): void {
    const element = document.getElementById('services');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
