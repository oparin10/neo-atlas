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
import { ServiceItemComponent } from './service-item/service-item.component';
import { RemoteWorkSectionComponent } from './remote-work-section/remote-work-section.component';
import { ProcessCardComponent } from './process-card/process-card.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RemoteLottieAnimationComponent } from './remote-lottie-animation/remote-lottie-animation.component';

import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    HeroSectionComponent,
    ButtonComponent,
    PromoSectionComponent,
    ProviderCardComponent,
    OurServicesComponent,
    ServiceItemComponent,
    RemoteWorkSectionComponent,
    ProcessCardComponent,
    OurProcessComponent,
    ContactUsComponent,
    RemoteLottieAnimationComponent,
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
