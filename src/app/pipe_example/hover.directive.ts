import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[hover]'
})

export class HoverDirective {
    colour: string | null = 'black'
    constructor(private element: ElementRef) {
        // this.element.nativeElement.style.color = 'red'
        // console.log(this.element.nativeElement)
        // this.element.on('mouseover')
    }
    @HostListener('mouseover') onmouseover(event: Event) {
        this.element.nativeElement.style.color = 'blue'
    }
    @HostListener('mouseleave') onmouseleave(event: Event) {
        this.element.nativeElement.style.color = 'purple'
    }

    @HostListener('click') onmouseclick(event: Event) {
        this.colour = prompt("enter color of your choice")
        this.element.nativeElement.style.color = this.colour
    }
}