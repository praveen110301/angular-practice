import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private route: ActivatedRoute) { }

  ngOninit() {
    console.log("kya dikkt h")
    console.log(this.route)
  }
}
