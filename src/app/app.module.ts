import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


// Config app locale

import localeEsMX from '@angular/common/locales/es-MX';

import localeFrCA from '@angular/common/locales/fr-CA';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'es_MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
