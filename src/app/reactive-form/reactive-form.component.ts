import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      pass: ['']
    })
  }

  sumbitData() {
    console.log(this.signUpForm);
    
  }
}
