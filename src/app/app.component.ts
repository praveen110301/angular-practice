import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { alertMessage } from './services/alert.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [alertMessage]
})
export class AppComponent {
  title = 'Angular_practice';

  constructor(private displayedText: alertMessage) { }

  firstObservable = new Observable((observer) => {
    console.log('observable starts')
    setTimeout(() => { observer.next('1') }, 1000)
    setTimeout(() => { observer.next('2') }, 2000)
    setTimeout(() => { observer.error('Somthing went wrong') }, 2000)
    setTimeout(() => { observer.next('3') }, 3000)
    setTimeout(() => { observer.next('4') }, 4000)
    // observer.next('1')
    // observer.next('2')
    // observer.next('3')
    // observer.next('4')
  });

  // ngOnInit() {
  //   this.firstObservable.subscribe((val) => {
  //     // setInterval(() => { console.log(val) }, 4000)  /// why running all at once
  //     console.log(val)
  //   },(err)=>{
  //     alert(err.message)
  //   })
  // }
  // run=()=> {
  //   this.firstObservable.subscribe((val) => {
  //     console.log(val)
  //   })
  // }
}
