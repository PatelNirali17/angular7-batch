import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  names = [];
  constructor(private http: HttpClient) { }
  id: string;
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

  getMethod1(){
    return this.http.get('https://reqres.in/api/users/2',{
      params: new HttpParams().set('id',this.id)
    });
  
  }
}
