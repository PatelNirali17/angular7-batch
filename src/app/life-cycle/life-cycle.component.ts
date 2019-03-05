import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input()
  myDt :string;
  constructor() { 
    console.log('im in constructor');
  }
  ngOnChanges(sc){
    console.log('im in ngOnChanges');
    console.log(sc);
    
  }
  ngOnInit() {
    console.log('im in ngOnInit');
  }
  ngDoCheck(){
    console.log('im in ngDoCheck');

  }
  ngAfterContentInit(){
    console.log('im in ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('im in ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('im in ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('im in ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('im in ngOnDestroy');
  }

}
