import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[display]'
})

export class DisplayDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.style.color = 'red'
    }

    AfterViewInit() {
    }
}