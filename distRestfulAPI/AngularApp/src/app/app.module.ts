import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestfulService } from './restful.service';
import { RestfulClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestfulClientModule,
  ],
  providers: [ResfulService],
  bootstrap: [AppComponent],
})
export class AppModule { }
