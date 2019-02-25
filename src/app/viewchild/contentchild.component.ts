import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contentchild',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class ContentchildComponent implements OnInit {
  @ContentChild('alert')
  valcontent: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.valcontent.nativeElement);
    
  }

}
