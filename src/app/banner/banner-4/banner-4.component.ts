import { Component, Input } from '@angular/core'
import { ImageDataComponent } from '../../ImageDataComponent.component'

@Component({
    templateUrl : './banner-4.component.html'
})

export class BannerFourComponent implements ImageDataComponent{
    @Input() data : any;
}