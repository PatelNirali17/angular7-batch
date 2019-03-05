import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
isVs = true;
constructor() { }
ngOnInit() {
}
onClick(){
// this.isVs =!this.isVs
this.title = `${this.title}-${new Date().getTime()}`
}
}
