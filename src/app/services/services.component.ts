import { Component, OnInit } from '@angular/core'; 
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  fruitList =[];
  // names = [
  //   'apple',
  //   'banana',           //without use services
  //   'mango',
  //   'pineapple'
  //   ]

  constructor(private fruitsService:FruitsService) { }

  ngOnInit() {
    this.fruitList = this.fruitsService.getFruits();
  }

}
