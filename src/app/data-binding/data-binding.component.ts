import { Component, OnInit } from '@angular/core';
import { Crd } from '../eventemitter/crd';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public name = 'codekul.com';
  public amount = 100;
  public selectedColor = 'red'
  public myDisable = true;
  public anyThing: string;
  pqr: Crd;
  clkEvent:string;

  constructor() {
    this.pqr = {} as Crd;
    this.pqr.imgUrl = 'https://www.traccar.org/images/server/feature-server.svg';
    this.pqr.title = 'Server';
    this.pqr.msg = 'Traccar software provides high performance and stability on Windows, Linux or any other platform. The server can be self-hosted in the cloud or on-premise. We also provide a number of hosted options with professional support.';
   }

  ngOnInit() {
  }
  onClick(pqr:Crd){
    console.log("pqr==>event receve ", pqr);
   this.clkEvent = pqr.title
     }
  clickMe(eve) {
    console.log("eve", eve);
  }
  tempref(myInput: string) {
    console.log("myInput", myInput);

  }

}
