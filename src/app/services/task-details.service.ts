import { Injectable } from '@angular/core';
import { Task } from '../task/task'; 
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Location } from '@angular/common';
import { Router } from '@angular/router/src/router';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class TaskDetailsService { 

      private tokenID = '$1$f4H5yZdo$5KEFwfIkVqwIfz6YRsHxz0';
      //private url = 'http://10.98.102.79/trackR/trackR/';
      private url = 'http://192.168.0.100/trackR/trackR/';
      task : Task[] = [];
      todosData:string[]=[];
  
      messages: Subject<any>;

      constructor(private http:HttpClient, private wsService: WebsocketService) {

        this.messages = <Subject<any>>wsService
          .connect()
          .map( (response:any):any => {
            return response  
          })        

      } 

      sendMsg(msg) {
        this.messages.next(msg);
      }
    
      
      getCurrentTask(){  
            //return this.http.get<Task[]>(this.url+'index.php/task?token='+this.tokenID+'&uid=2')
      } 

      createTaskDB(){

      // return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : "IN002", password: '123' },{headers: new HttpHeaders().set('Content-Type', 'application/json')}); 
            return this.http.post<any>(this.url+'index.php/task/create', {
                  token : this.tokenID,
                  uid : "2",
                  converge_id: "aaaLaogan",
                  jobtype: "Refresh",
                  complexity:"3",
                  scheduled_start_date:"2018-02-07",
                  scheduled_end_date:"2018-02-11",
                  publisher:"WM",
                  task_status:'1',
                  pocs:"Shameem",
                  scheduled_hours:"24"
            }) 
      } 
  

}
