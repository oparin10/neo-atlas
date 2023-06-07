import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, RouterModule, ComponentsModule],
  declarations: [LandingLayoutComponent],
  exports: [],
})
export class LandingLayoutModule {}
