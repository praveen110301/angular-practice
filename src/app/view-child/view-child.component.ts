import { AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('usrName') userName?: ElementRef;
  @ViewChildren('usrDetail') userDetail?: QueryList<any>;

  @ContentChild('ref') refRef?: ElementRef;

  show() {
    console.log(this.userName?.nativeElement.value)
    console.log(this.userDetail)
    console.log(this.userDetail?.first)
    console.log(this.userDetail?.last)
  }

  ngAfterViewInit() {
    console.log(this.refRef?.nativeElement.value)
  }
  showParent() {
    console.log(this.refRef?.nativeElement)
  }

}
