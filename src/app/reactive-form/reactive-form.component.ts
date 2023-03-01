import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userLogin = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  login() {
    console.log(this.userLogin.value)
  }

  get userName() {
    return this.userLogin.get('userName')
  }
  get userPassword() {
    return this.userLogin.get('userPassword')
  }


}
