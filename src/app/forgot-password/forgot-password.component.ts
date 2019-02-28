import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  forgot(usNm: string) {
    console.log(usNm);
    this.router.navigate(['employeedetails',usNm])
                     
  }
}
