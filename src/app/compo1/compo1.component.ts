import { Component } from '@angular/core';
import {DatasharingService} from '../services/datasharing.service'

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss']
})
export class Compo1Component {

  constructor(private dataSharingService:DatasharingService){}
  sendDataToReceiver(dataToShare:string):void{
    this.dataSharingService.dataSharing.next(dataToShare)
  }
}
