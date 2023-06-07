import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LandingLayoutModule } from './layouts/landing-layout/landing-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, LandingLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
