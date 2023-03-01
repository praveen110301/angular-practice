import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject} from 'rxjs';
import { ApicallService } from '../services/apicall.service'

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss']
})
export class HttprequestComponent {
  userData: any = [];

  constructor(private apiCall: ApicallService) {
    this.subjectUser.subscribe((data: number) => {
      console.log(`The data subscribed is ${data}`);
    });
  }
  subjectUser2 = new BehaviorSubject<number>(123);
  subjectUser = new Subject<number>();
  

  //subject
  ngOnInit() {
    // this.subjectUser.subscribe((data: number) => {
    //   console.log(`The data subscribed is ${data}`);
    // });
    this.subjectUser2.subscribe((data1:number)=>{
      console.log(data1)
    })
    this.subjectUser.next(100)
  }

  observable$: Observable<number[]> = of([1, 2, 3, 4, 5,]);
  getUserData() {
    this.apiCall.getUserData().subscribe((usrData) => {
      this.userData = usrData;
      console.log(usrData);
      console.log(typeof (usrData))
    });
    // this.apiCall.getUserData().subscribe((userData)=>{
    // console.log(userData)
    // });
    console.log(this.observable$);
    console.log(typeof (this.observable$));

  }
}
