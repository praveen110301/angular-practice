import { Component, Inject } from '@angular/core';
import { usdInrPipe } from '../pipes/usd-inr.pipe';
import { alertMessage } from '../services/alert.services';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
  // providers:[alertMessage]  not needed as it is called in app.module.ts
  providers: [{ provide: 'USE_FAKE', useValue: true },
  ]
})
export class FirstComponentComponent {
  title: string = "component"
  status = true
  colour = "black"
  firstName: string = "praveen"
  lastName: string = "singh"

  constructor(private displayedText: alertMessage, @Inject('USE_FAKE') private useFake: string) {
    console.log(useFake)
  }

  print() {
    this.status = false
  }
  // ngOnInit() {
  //   console.log('OnInit')
  // }
  change() {
  }

  receiveChildData(data: string) {
    console.log(data);
  }
  user_login(item: any) {
    console.log(item)
  }

  display(): void {
    // var displayedText = new alertMessage
    this.displayedText.Onclicked(this.title)
  }
  convertIntoRs(value: number) {
  }

  //checking life cycle hook
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.title}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.title}`);
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
