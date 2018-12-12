import { Directive, ViewContainerRef} from '@angular/core'

@Directive({
    selector : '[add-banner]'
})

export class ComponentLoaderDirective {
    constructor(public viewContainerRef : ViewContainerRef) {}
}
