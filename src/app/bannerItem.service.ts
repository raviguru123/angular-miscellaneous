import {  BannerOneComponent } from './banner/banner-1/banner-1.component'
import { BannerTwoComponent } from './banner/banner-2/banner-2.component'

import { BannerThirdComponent } from './banner/banner-3/banner-3.component'
import { BannerFourComponent } from './banner/banner-4/banner-4.component'
import { BannerFiveComponent} from './banner/banner-5/banner-5.component'

import { BannerItemComponent } from './banner.item.component'
export class BannerItemsService {

    getBanner() {
        return [
            new BannerItemComponent(BannerOneComponent, {title : "Hello pagal", description : "Ye pagal ladki hai jra hat ke"}),
            new BannerItemComponent(BannerTwoComponent, {title : "Burger ki Smell check karti hui", description : "Smell Nahi kar rha kha le ab"}),
            new BannerItemComponent(BannerThirdComponent, {title : "Burger ki Smell check karti hui", description : "Smell Nahi kar rha kha le ab"}),
            new BannerItemComponent(BannerFourComponent, {title : "Burger ki Smell check karti hui", description : "Smell Nahi kar rha kha le ab"}),
            new BannerItemComponent(BannerFiveComponent, {title : "New Look with no tension", description : "Smell Nahi kar rha kha le ab"})
     ]
    }
    
}