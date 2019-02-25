import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-firsl',
  template: `
    <a href="#">Registration Here</a>
  `,
  styles: [
    'a{text-decoration:none;margin-left: 550px;}'
  ]
})
export class SmallFirslComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
