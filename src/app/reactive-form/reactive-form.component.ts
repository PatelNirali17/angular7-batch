import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;
  focusVar: false;
  constructor(
    private fruitsService:FruitsService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      pass: ['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]
    })
  }

  sumbitData() {
    console.log(this.signUpForm);
    this.fruitsService.foo.next('Hello');
    this.router.navigate(['observable']);
  }
}
