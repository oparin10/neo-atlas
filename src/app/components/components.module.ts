import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtlasLogoSvgComponent } from './atlas-logo-svg/atlas-logo-svg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSvgComponent } from './hero-svg/hero-svg.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AtlasLogoSvgComponent,
    LandingPageComponent,
    HeroSvgComponent,
    HeroSectionComponent,
    ButtonComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AtlasLogoSvgComponent,
    LandingPageComponent,
    HeroSvgComponent,
    HeroSectionComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
