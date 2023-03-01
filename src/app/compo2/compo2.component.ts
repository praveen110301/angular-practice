import { Component ,OnInit} from '@angular/core';
import { DatasharingService } from '../services/datasharing.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.scss']
})
export class Compo2Component {
  constructor(readonly dataSharingService: DatasharingService) { }

  // dataToShow:string="no data available";

  // ngOnInit() {
  //   // this.dataSharingService.dataSharing.subscribe((dataReceived: string) => {
  //   //   console.log(dataReceived)
  //   //   this.dataToShow=dataReceived
  //   // })
  // }
}
