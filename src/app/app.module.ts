import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LandingLayoutModule } from './layouts/landing-layout/landing-layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from './services/services.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagesModule,
    LandingLayoutModule,
    ReactiveFormsModule,
    ServicesModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
