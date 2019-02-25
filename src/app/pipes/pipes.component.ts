import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public message = 'angular 7 batch';
  public message1 = 'ANGULAR';
  public title = "hello codekul"
  public person = {
    "name":"codekul",
    "branch":"angular7"
  };
 
  birthday = new Date(1988, 2, 15)
  constructor() { }

  ngOnInit() {
  }

}
