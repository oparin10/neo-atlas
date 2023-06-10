import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SvgModule } from '../svg/svg.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [LandingPageComponent, ContactComponent],
  imports: [CommonModule, ComponentsModule, SvgModule],
  exports: [LandingPageComponent],
})
export class PagesModule {}
