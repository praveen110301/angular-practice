import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent {
  title: string = 'lifecycle_hooks'
  count: number = 0;
  @Input() item: string = '';

  changeSomething() {
    this.count++;
    console.log(this.count)
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChages called")
    console.log(changes)
  }
  ngOnInit() {
    console.log(`ngOnInit called`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
