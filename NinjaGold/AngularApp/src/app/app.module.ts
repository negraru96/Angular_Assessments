import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { ActivityComponent } from './activity/activity.component';

import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
