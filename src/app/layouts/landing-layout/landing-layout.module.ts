import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LandingLayoutComponent],
})
export class LandingLayoutModule {}
