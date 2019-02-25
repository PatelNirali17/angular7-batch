import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  hoverVar = false;
  displayName = false;
  color = "red";
  students = ['nirali','sarika','surbhi','kalyani','sonal']
  
  constructor() { }

  ngOnInit() {
  }
  
}
