import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
myVal:string;
@ViewChild('myValue')
valchild: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onclick(val: string) {
    console.log(val);
    this.myVal = this.valchild.nativeElement.value;
    
  }
}
