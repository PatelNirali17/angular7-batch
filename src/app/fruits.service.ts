import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as RX from 'rxjs' //observable

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  names = [];
  constructor(private http: HttpClient) { }
  id: string;

  foo = new RX.ReplaySubject() //observables


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
  postForm(form) {
    return this.http.post('https://reqres.in/api/users', form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
