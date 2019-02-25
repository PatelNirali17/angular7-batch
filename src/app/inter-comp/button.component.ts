import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button type="button" class="btn btn-success mt-2 ml-3" (click)="onClick(1)"><i class="fas fa-plus"></i></button>
  <button type="button" class="btn btn-danger mt-2 ml-3" (click)="onClick(2)"><i class="fas fa-minus"></i></button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Output()
  Clkevent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  onClick(btn: number) {
    this.Clkevent.emit(btn);
  }
}
