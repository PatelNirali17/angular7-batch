import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `
  <div class="progress m-3">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" [style.width]="progress"></div>
</div>
  `,
  styles: []
})
export class ProgressComponent implements OnInit {
  @Input()
  progress: string;
  constructor() { }

  ngOnInit() {
  }

}
