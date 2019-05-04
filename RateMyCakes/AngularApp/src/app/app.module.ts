import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { DisplayComponent } from './display/display.component';

import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
