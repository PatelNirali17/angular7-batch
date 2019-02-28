import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  names = [];
  constructor(private httpClient: HttpClient) { }
  
  getFruits(){
    return this.names = [
      'apple',
      'banana',
      'mango',
      'pineapple'
      ]
  }
}
