import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtlasLogoSvgComponent } from '../svg/atlas-logo-svg/atlas-logo-svg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSvgComponent } from '../svg/hero-svg/hero-svg.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';
import { PromoSectionComponent } from './promo-section/promo-section.component';
import { PromoSvgComponent } from '../svg/promo-svg/promo-svg.component';
import { GcpSvgComponent } from '../svg/gcp-svg/gcp-svg.component';
import { AngularIconSvgComponent } from '../svg/angular-icon-svg/angular-icon-svg.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { SvgModule } from '../svg/svg.module';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  imports: [CommonModule, RouterModule, SvgModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    HeroSectionComponent,
    ButtonComponent,
    PromoSectionComponent,
    ProviderCardComponent,
    OurServicesComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    HeroSvgComponent,
    HeroSectionComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
