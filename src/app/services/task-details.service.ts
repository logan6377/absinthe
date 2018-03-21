import { Injectable } from '@angular/core';
import { Task } from '../task/task'; 
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Location } from '@angular/common';
import { Router } from '@angular/router/src/router'; 
import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class TaskDetailsService { 
      private tokenID = '$1$tR0.ym3.$SM5S9wqpuV5aazjRE6zo//';
      private url = 'http://10.98.20.100/trackR/';
      //private url = 'http://192.168.0.104/trackR/';      
      private task : Task[] = [];
      private todosData:string[]=[];  

      constructor(private http:HttpClient) {}

      getCurrentTask(){  
            return this.http.get<Task[]>(this.url+'index.php/task?token='+this.tokenID+'&uid=2')
      } 
      saveTask(data){
            data.token = this.tokenID;
            data.uid = 2; 
            //return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : "IN002", password: '123' },{headers: new HttpHeaders().set('Content-Type', 'application/json')}); 
            return this.http.post<any>(this.url+'index.php/task/create', data) 
      } 

      updateTask(data, taskid){
            //console.log(data.task_id)
            data.token = this.tokenID;
            data.uid = 2;  
            return this.http.post<any>(this.url+'index.php/task/update/'+taskid, data) 
      }
}