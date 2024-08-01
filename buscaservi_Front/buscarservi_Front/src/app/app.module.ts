import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule
    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: []
})
export class AppModule { }
