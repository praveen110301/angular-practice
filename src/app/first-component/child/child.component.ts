import { Component, Input, Output, EventEmitter,Inject } from '@angular/core';
import { alertMessage } from 'src/app/services/alert.services';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // providers:[alertMessage]   this is working because of hierarchical injection of instance by angular
})
export class ChildComponent {
  title="component2"

  constructor(private displayedText:alertMessage,@Inject('USE_FAKE') private useFake:string){
    console.log(useFake)
  }

  @Input() firstName: string | null = '';
  @Input() lastName = '';

  user:string[]= ["praveen" , "tarush",'piyush','riyan','tushar']

  @Output() outputFromChild: EventEmitter<string> = new EventEmitter();
  outputText: string = "Hi ... message from child";

  sendDataToParent(): void {
    this.outputFromChild.emit(this.outputText);

  }
  display():void{
    // var displayedText = new alertMessage
    this.displayedText.Onclicked(this.title)
  }
}
