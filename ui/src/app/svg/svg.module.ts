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
import { RustIconSvgComponent } from './rust-icon-svg/rust-icon-svg.component';
import { FigmaIconSvgComponent } from './figma-icon-svg/figma-icon-svg.component';
import { ServiceIconOneComponent } from './service-icon-one/service-icon-one.component';
import { ServiceIconTwoComponent } from './service-icon-two/service-icon-two.component';
import { ServiceIconThreeComponent } from './service-icon-three/service-icon-three.component';
import { ServiceIconFourComponent } from './service-icon-four/service-icon-four.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { ChatIconComponent } from './chat-icon/chat-icon.component';
import { PuzzleIconSvgComponent } from './puzzle-icon-svg/puzzle-icon-svg.component';
import { RocketIconSvgComponent } from './rocket-icon-svg/rocket-icon-svg.component';

const DECLARATIONS = [
  AwsSvgComponent,
  AtlasLogoSvgComponent,
  PromoSvgComponent,
  GcpSvgComponent,
  HeroSvgComponent,
  AngularIconSvgComponent,
  ReactIconSvgComponent,
  TsIconSvgComponent,
  JsIconSvgComponent,
  RustIconSvgComponent,
  FigmaIconSvgComponent,
  ServiceIconOneComponent,
  ServiceIconTwoComponent,
  ServiceIconThreeComponent,
  ServiceIconFourComponent,
  WhatsappIconComponent,
  ChatIconComponent,
  PuzzleIconSvgComponent,
  RocketIconSvgComponent,
];

@NgModule({
  declarations: [DECLARATIONS],
  imports: [CommonModule],
  exports: [DECLARATIONS],
})
export class SvgModule {}
