import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  countryList = ['India', 'USA', 'Germany', 'France']
  onSubmit(userData: NgForm) {
    console.log(userData.value)
    alert('your details has been recorded')
  }
  doReset(theForm: NgForm) {
    theForm.resetForm();

  }
}
