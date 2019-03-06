import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  forgot(){
    this.router.navigate(['forgot'])
  }
  login(usNm, pass) {
    // console.log(usNm);
    // console.log(pass);
    // if (usNm === 'codekul' && pass === 'angular') {
      
    // }
    this.router.navigate(['employeedetails',usNm],
    {
      queryParams: {
        ver: 7
      }
    })
}
child1(){
  this.router.navigate(['one'])
}
child2(){
  this.router.navigate(['two'])
}
}
