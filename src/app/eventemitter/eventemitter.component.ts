import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crd } from './crd';

@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.css']
})
export class EventemitterComponent implements OnInit {
@Input()
  crd:Crd;
@Output()
crdEv : EventEmitter<Crd> = new EventEmitter<Crd>();

   constructor() { }

  ngOnInit() {
  }
  goSm(crd){
    console.log("crd ", crd.title);
    this.crdEv.emit(crd)
     }

}
