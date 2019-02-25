import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampledirective',
  templateUrl: './sampledirective.component.html',
  styleUrls: ['./sampledirective.component.css']
})
export class SampledirectiveComponent implements OnInit {
  displayName = false;
  show = true;
  showName = true;
  weekday = 5;
  template = 2;
  tables = [
    {
      name: "Nirali",
      course: "Codkul Engineering",
      address:"Chikhli",
      mobileNo: 8141390586
    },
    {
      name: "Sarika",
      course: "Web Devlopment",
      address:"Pune",
      mobileNo: 8308587505
    },
    {
      name: "Surbhi",
      course: "Web Devlopment",
      address:"Indore",
      mobileNo: 9131640587
    }];

  // adventures = [
  //   {
  //     name: "Earl of Lemongrab",
  //     age: "Unknown",
  //     species: "Lemon Candy",
  //     ocupation: "Earl, Heir to the Candy Kingdom Throne"
  //   },
  //   {
  //     name: "Bonnibel Bubblegum",
  //     age: 19,
  //     species: "Gum Person",
  //     ocupation: "Returned Ruler of the Candy Kingdom"
  //   },
  //   {
  //     name: "Phoebe",
  //     age: 16,
  //     species: "Flame Person",
  //     ocupation: "Ruler of the fire Kingdom"
  //   },
  //   {
  //     name: "Lumpy Space Princess",
  //     age: 18,
  //     species: "Lumpy Space Person",
  //     ocupation: "Babysitter"
  //   }];

  constructor() { }

  ngOnInit() {
  }

}
