import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentLoaderDirective } from './component-loader.directive';
import { BannerOneComponent } from './banner/banner-1/banner-1.component'
import { BannerTwoComponent } from './banner/banner-2/banner-2.component'
import { BannerLoaderComponent } from './BannerLoader/bannerLoader.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerLoaderComponent,
    BannerOneComponent,
    BannerTwoComponent,
    ComponentLoaderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
