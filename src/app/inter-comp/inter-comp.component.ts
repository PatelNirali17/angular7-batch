import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-comp',
  templateUrl: './inter-comp.component.html',
  styleUrls: ['./inter-comp.component.css']
})
export class InterCompComponent implements OnInit {
  prog: number = 0;
  prgStr: string;
  constructor() { }

  ngOnInit() {
  }
  click(btn: number) {
    if (btn === 1) {
      this.prgStr = `${this.prog++}%`;
      console.log(`${this.prog++}%`);

    }
    if (btn === 2) {
      this.prgStr = `${--this.prog}%`;
      console.log(`${--this.prog}%`);
    }
  }
}
