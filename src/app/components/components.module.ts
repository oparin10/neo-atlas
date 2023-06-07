import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent
  ],
})
export class ComponentsModule {}
