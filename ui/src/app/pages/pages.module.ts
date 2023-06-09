import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SvgModule } from '../svg/svg.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ContactPageComponent,
    LoginPageComponent,
  ],
  imports: [CommonModule, ComponentsModule, SvgModule],
  exports: [LandingPageComponent, ContactPageComponent, LoginPageComponent],
})
export class PagesModule {}
