import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MessageService {

  messages: string[] = [];

  add(message:string)
  {
    this.messages.push(message);
  }

  Sum(a,b)
  {
    return a+b;
  }


  clear()
  {
      this.messages = []; 
  }  
  constructor() { }
}
