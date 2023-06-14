import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportService } from './viewport.service';
import { ContactFormService } from './contact-form.service';

@NgModule({
  providers: [ViewportService, ContactFormService],
})
export class ServicesModule {}
