import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent implements OnInit {
  myForm: NgForm
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(Form: NgForm) {
    console.log(Form);

  }
}
