import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentLoaderDirective } from './component-loader.directive';
import { BannerOneComponent } from './banner/banner-1/banner-1.component'
import { BannerTwoComponent } from './banner/banner-2/banner-2.component'

import { BannerThirdComponent } from './banner/banner-3/banner-3.component'
import { BannerFourComponent } from './banner/banner-4/banner-4.component'
import { BannerFiveComponent} from './banner/banner-5/banner-5.component'

import { BannerLoaderComponent } from './BannerLoader/bannerLoader.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerLoaderComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThirdComponent,
    BannerFourComponent,
    BannerFiveComponent,
    ComponentLoaderDirective
  ],
  entryComponents : [
    BannerOneComponent,
    BannerTwoComponent,
    BannerThirdComponent,
    BannerFourComponent,
    BannerFiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
