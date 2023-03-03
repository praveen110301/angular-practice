import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: any = [];
  constructor(public http: HttpClient) { }
  userData = this.http.get('https://jsonplaceholder.typicode.com/users')

  ngOnInit() {
    this.userData.subscribe(d => this.data = d)
  }
}
