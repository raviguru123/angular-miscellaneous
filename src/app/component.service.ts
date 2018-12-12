import {  BannerOneComponent } from './banner/banner-1/banner-1.component'
import { BannerTwoComponent } from './banner/banner-2/banner-2.component'
import { BannerItemComponent } from './banner.item.component'
export class BannerItems {

    getBanner() {
        return [
            new BannerItemComponent(BannerOneComponent, {title : "Hello pagal", description : "Ye pagal ladki hai jra hat ke"}),
            new BannerItemComponent(BannerTwoComponent, {title : "saitan bhookhi ladki", description : "10 din se khana nahi kahyi dhayan se dekho"})
     ]
    }
    
}