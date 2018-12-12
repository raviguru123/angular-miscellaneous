import { Component, Input } from '@angular/core'
import { ImageDataComponent } from '../../ImageDataComponent.component'

@Component({
    templateUrl : './banner-5.component.html'
})

export class BannerFiveComponent implements ImageDataComponent{
    @Input() data : any;
}