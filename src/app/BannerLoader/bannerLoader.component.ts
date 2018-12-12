import { Component, Input, ViewChild, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { BannerItemsService } from '../bannerItem.service';
import { BannerItemComponent } from '../banner.item.component';
import { ComponentLoaderDirective } from '../component-loader.directive';
import {ImageDataComponent } from '../ImageDataComponent.component'
@Component({
    selector : 'add-banners',
    templateUrl : './bannerLoader.component.html'
})

export class BannerLoaderComponent implements OnInit, OnDestroy {
    @Input() banners : BannerItemComponent[];
    @ViewChild(ComponentLoaderDirective) AddBannerDirective : ComponentLoaderDirective ; 
    initIndex = -1;
    Interval : any;
    constructor(private ComponentFactoryResolver : ComponentFactoryResolver){}
    ngOnInit() {
        this.LoadBanner();
        this.initLoad();
    }

    LoadBanner() {
        this.initIndex = (this.initIndex + 1) % this.banners.length
        let banner = this.banners[this.initIndex];
        let componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(banner.component);
        let viewVcontainerRef = this.AddBannerDirective.viewContainerRef;
        viewVcontainerRef.clear();
        let containerRef = viewVcontainerRef.createComponent(componentFactory);
        (<ImageDataComponent>containerRef.instance).data = banner.data;
    }

    ngOnDestroy() {
       
    }
    initLoad() {
        this.Interval = setInterval(()=>{
            this.LoadBanner();
        },4000)
    }


}