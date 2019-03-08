import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Data } from './postdata';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  postDataForm:FormGroup;
  fruitList = [];
  joke :string;
  // names = [
  //   'apple',
  //   'banana',           //without use services
  //   'mango',
  //   'pineapple'
  //   ]

  constructor(private fruitsService: FruitsService,
    private fb:FormBuilder) { }

  ngOnInit() {
    this.fruitList = this.fruitsService.getFruits();
    this.callGetMethod();
    this.postDataForm = this.fb.group({
      name:[''],
      job:['']
    })
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
  submitPostData(){
    let formData : Data = {} as Data;
    formData = this.postDataForm.value;
    this.fruitsService.postForm(formData).subscribe(res =>{
      console.log(res);
      
    })
   }
}
