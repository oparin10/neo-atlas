import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtlasLogoSvgComponent } from './atlas-logo-svg/atlas-logo-svg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AtlasLogoSvgComponent,
    LandingPageComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AtlasLogoSvgComponent,
    LandingPageComponent,
  ],
})
export class ComponentsModule {}
