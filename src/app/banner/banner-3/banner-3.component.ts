import { Component, Input } from '@angular/core'
import { ImageDataComponent } from '../../ImageDataComponent.component'

@Component({
    templateUrl : './banner-3.component.html'
})

export class BannerThirdComponent implements ImageDataComponent{
    @Input() data : any;
}