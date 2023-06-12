import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgModule } from '../svg/svg.module';
// components exports
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';
import { PromoSectionComponent } from './promo-section/promo-section.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { RemoteWorkSectionComponent } from './remote-work-section/remote-work-section.component';
import { ProcessCardComponent } from './process-card/process-card.component';
import { OurProcessComponent } from './our-process/our-process.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RemoteLottieAnimationComponent } from './remote-lottie-animation/remote-lottie-animation.component';

import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { PersonalContactSectionComponent } from './personal-contact-section/personal-contact-section.component';

export function playerFactory() {
  return player;
}

const declarations = [
  FooterComponent,
  NavbarComponent,
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
  TextInputComponent,
  TextAreaComponent,
  ContactFormComponent,
  PhoneNumberComponent,
  ContactCardComponent,
  PersonalContactSectionComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
  ],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ComponentsModule {}
