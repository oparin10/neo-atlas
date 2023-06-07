import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtlasLogoSvgComponent } from './atlas-logo-svg/atlas-logo-svg.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AtlasLogoSvgComponent
  ],
})
export class ComponentsModule {}
