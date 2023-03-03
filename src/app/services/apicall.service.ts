import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  constructor(private httprequest: HttpClient) {
    console.log("Httprequest instance created.")
  }

  getUserData(): Observable<any> {
    let apiUrl = "https://jsonplaceholder.typicode.com/users"
    return this.httprequest.get(apiUrl)
    // .catch(()=>{

    // })
  }

}
