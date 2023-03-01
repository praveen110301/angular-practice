import { Component, AfterViewInit } from '@angular/core';
import { Observable, of, switchMap, filter, debounce, interval, timer, exhaustMap, fromEvent, take, mergeMap, map, delay } from 'rxjs';
@Component({
  selector: 'app-differentmaps',
  templateUrl: './differentmaps.component.html',
  styleUrls: ['./differentmaps.component.scss']
})
export class DifferentmapsComponent {
  //switch map variables
  switchMapExample$: Observable<number | null> = of(null);
  insideObservable$: Observable<number> = of(6, 7, 8)
  switchh: Observable<number | null> = of(null)
  //exhaust map variables
  exhaustMapExample$: Observable<number> = interval(1000)
  insideExhaustMapObservable$: Observable<number> = of(6, 7, 8, 9, 10)
  //merge map variable
  letters = of('a', 'b', 'c', 'd', 'e', 'f');

  // testing switchmap with different observable
  switchMapTesting$ = interval(10000).pipe(
    switchMap(() => interval(1000)))

  // testing exhaustmap with different observable
  exhaustMapTesting$ = interval(3000).pipe(
    exhaustMap(() => timer(1000, 200))
  ).pipe(take(10))

  //merge map with diff observable
  mergeMapTesting$ = interval(1000).pipe(
    mergeMap(() => interval(5000))
  )


  ngOnInit() {
    this.switchMapExample$ = interval(1000)
    this.switchh = this.switchMapExample$.pipe(filter(val => !!val), switchMap(
      (val) => {
        // console.log(val); 
        return this.insideObservable$
      }))


    // .subscribe(d => console.log(d))  // commented to run exhaust map

    // this.switchMapExample$.pipe(filter(val => !!val), switchMap((value) => timer(0, 2000)))
    // this.switchMapExample$.subscribe(d => console.log(d))

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   exhaustMap(() => interval(1000).pipe(take(5)))
    // );
    // result.subscribe(x => console.log(x));

    this.exhaustMapExample$.pipe(exhaustMap((val) =>
      // interval(2000).pipe(map(i=>val+i))
      // console.log(val);
      this.insideExhaustMapObservable$
    ))
    // .subscribe(d => console.log(d))


    this.letters.pipe(
      mergeMap(x => interval(2000).pipe(map(i => x + i)))
    )
    // .subscribe(d=>console.log(d))
  }

  // text = of('Hello guys, Welcome To');
  // case1 = this.text.pipe(switchMap((value) => of(value + ' JavaTpoint!')));
  // ngOnInit() {
  //   // this.text.subscribe(d=> console.log(d))
  //   this.case1.subscribe((value) => { console.log(value); });
  // }

  // exhaust map


}