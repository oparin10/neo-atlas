import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsSvgComponent } from './aws-svg/aws-svg.component';
import { AtlasLogoSvgComponent } from './atlas-logo-svg/atlas-logo-svg.component';
import { PromoSvgComponent } from './promo-svg/promo-svg.component';
import { GcpSvgComponent } from './gcp-svg/gcp-svg.component';
import { HeroSvgComponent } from './hero-svg/hero-svg.component';
import { AngularIconSvgComponent } from './angular-icon-svg/angular-icon-svg.component';
import { ReactIconSvgComponent } from './react-icon-svg/react-icon-svg.component';
import { TsIconSvgComponent } from './ts-icon-svg/ts-icon-svg.component';
import { JsIconSvgComponent } from './js-icon-svg/js-icon-svg.component';

@NgModule({
  declarations: [
    AwsSvgComponent,
    AtlasLogoSvgComponent,
    PromoSvgComponent,
    GcpSvgComponent,
    HeroSvgComponent,
    AngularIconSvgComponent,
    ReactIconSvgComponent,
    TsIconSvgComponent,
    JsIconSvgComponent,
  ],
  imports: [CommonModule],
  exports: [
    AwsSvgComponent,
    AtlasLogoSvgComponent,
    PromoSvgComponent,
    GcpSvgComponent,
    HeroSvgComponent,
    AngularIconSvgComponent,
    ReactIconSvgComponent,
    TsIconSvgComponent,
  ],
})
export class SvgModule {}
