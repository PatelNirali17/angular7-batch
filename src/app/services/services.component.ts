import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  fruitList = [];
  joke :string;
  // names = [
  //   'apple',
  //   'banana',           //without use services
  //   'mango',
  //   'pineapple'
  //   ]

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {
    this.fruitList = this.fruitsService.getFruits();
    this.callGetMethod();
  }

  callGetMethod() {
    this.fruitsService.getMethod().subscribe(result => {
      console.log(result);
      console.log(result['value'].joke);
      this.joke = result['value'].joke    
    });
    this.fruitsService.getMethod1().subscribe(result1 => {
      console.log(result1);
      console.log(result1['data'].id);
      this.joke = result1['data'].id    
    });
  }
}
