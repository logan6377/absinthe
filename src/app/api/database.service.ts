import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor(private http:Http) { }

  test(){
    return 'loganadf'
  }

}
