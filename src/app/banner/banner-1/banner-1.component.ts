import { Component, Input } from '@angular/core'
import { ImageDataComponent } from '../../ImageDataComponent.component'

@Component({
    templateUrl : './banner-1.component.html'
})

export class BannerOneComponent implements ImageDataComponent{
    @Input() data : any;
}