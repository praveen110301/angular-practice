import { Component, AfterViewInit } from '@angular/core';
import { Observable, of, timer, map, interval, debounce, fromEvent, filter } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements AfterViewInit {
  nameList = ['praveen', 'tarush', 'tushar', 'riyansh', 'piyush']
  stringName = "PRAVEEN"
  dataToMap: Observable<number|null>=of(null);


  nameObservable$: Observable<string[]> = of(this.nameList)
  stringObservable$: Observable<string> = of(this.stringName)

  ngOnInit() {
    this.nameObservable$.subscribe((d)=>{
      timer(2000).subscribe((d)=>{
        console.log(d)
      })
      console.log(d)
      console.log(typeof(this.nameObservable$))
    })

    this.stringObservable$.subscribe((stringData)=>{
      timer(2000).subscribe((d)=>{
        console.log(d)
      })
      console.log(stringData)
      console.log(typeof(stringData))
    })

    timer(1000,2000).subscribe((count)=>{
      console.log(count)
    })

    //map
    this.dataToMap= of(2, 3, 4,5, 6)
    this.dataToMap.subscribe((d) => {
      console.log(d)
    })

    // console.log(typeof (this.dataToMap))
    // this.dataToMap=this.dataToMap.pipe(map(val=> val!*2))
    this.dataToMap.pipe(filter(val=>!!val),map((value) => { return 2 * value! }))
    .subscribe((d) => {
      console.log(d)
    })

    //interval
    // timer(1000, 1000).pipe(interval(1000)).subscribe(d => {
    //   console.log(d)
    // })

    //debounce
    interval(1000).pipe(debounce((val)=>(interval(val * 10)))).subscribe(d=>{
      console.log(d)
    })


  }
  ngAfterViewInit(): void {
    // console.log(document.getElementsByClassName('box'))
    let btnEvent = fromEvent(document.getElementsByClassName('box')!, 'click');
    btnEvent.pipe(debounce((val: Event) => interval(1000))).subscribe(d => {
      console.log(d)
    })
  }
}

