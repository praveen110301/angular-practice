import { Component } from '@angular/core';
import { count, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  // count1: Observable<number> = of(0);
  // count2: Observable<number> = of(0);
  count1 = 0;
  count2 = 0;
  btn1Clicked = fromEvent(document.getElementsByClassName('btn1')!, 'click')
  btn2Clicked = fromEvent(document.getElementsByClassName('btn2')!, 'click')
  btnOneClicked = new Observable<number>
  btnTwoClicked = new Observable<number>

  btn1() {
    this.count1++;
    console.log(`btn 1 count is ${this.count1}`)
    // this.btn1Clicked = fromEvent(document.getElementsByClassName('btn1')!, 'click')
    this.btnOneClicked.subscribe(d => console.log(d))
  }

  btn2() {
    this.count2++;
    console.log(`btn 2 count is ${this.count2}`)
    // this.btn2Clicked = fromEvent(document.getElementsByClassName('btn2')!, 'click')
  }


  ngOnInit() {
    // this.btn1Clicked.pipe(map(this.count1.next()))

  }
}
