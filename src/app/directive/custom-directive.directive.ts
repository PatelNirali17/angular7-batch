import { Directive, HostBinding, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @HostBinding('class.brd')
  brd: boolean;

  @Input('appCustomDirective')
  @HostBinding('style.width')
  wd: string;

  constructor() { }
  @HostListener('mouseenter')
  inBox() {
    this.wd = '600px';
    this.brd = true;
  }
  @HostListener('mouseleave')
  outBox() {
    this.wd = '300px';
    this.brd = false;
  }
}
