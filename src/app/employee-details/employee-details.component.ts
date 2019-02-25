import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
usnm: string;
sub: Subscription
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {

   }

  ngOnInit() {
    this.usnm = this.activatedRoute.snapshot.params['usNm'];
    this.activatedRoute.params.subscribe(newParam => {
      this.usnm = newParam['usNm']
    })
    this.router.routerState.root.queryParams.subscribe(queryperms => {
      this.usnm = queryperms['ver']
    })
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }
  changeUsNm(chUsNm: string){
this.router.navigate(['employeedetails', chUsNm])
  }
}
