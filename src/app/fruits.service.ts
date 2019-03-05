import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  names = [];
  constructor(private http: HttpClient) { }
  
  getFruits(){
    return this.names = [
      'apple',
      'banana',
      'mango',
      'pineapple',
      'grapes',
      'orange',
      'guava',
      'pineapple'
      ]
  }
  getMethod(){
    return this.http.get('http://api.icndb.com/jokes/random')
  }
}
