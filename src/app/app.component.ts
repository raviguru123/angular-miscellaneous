import { Component, OnInit } from '@angular/core';
import { BannerItemComponent } from './banner.item.component'
import { BannerItemsService } from './bannerItem.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [BannerItemsService]
})
export class AppComponent implements OnInit{
  title = 'app';
  bannerItems : BannerItemComponent[];
  constructor(private bannerItemService : BannerItemsService){}
  ngOnInit() {
    this.bannerItems = this.bannerItemService.getBanner();
  }
}
