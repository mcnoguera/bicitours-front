import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegurosModule} from './seguros/seguros.module';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import {ShareModule} from './share/share.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,

    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SegurosModule,
    HttpClientModule,
    ShareModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
