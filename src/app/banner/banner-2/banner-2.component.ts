import { Component, Input } from '@angular/core'
import { ImageDataComponent } from '../../ImageDataComponent.component'

@Component({
    templateUrl : './banner-2.component.html'
})

export class BannerTwoComponent implements ImageDataComponent {
    @Input() data : any;
}