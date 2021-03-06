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
      private tokenID = '$1$vFDho34x$MuhM2B6ul8dyvidBxwmJT1';
      //private url = 'http://10.98.20.100/trackR/';
      private url = 'http://192.168.0.104/trackR/';      
      private task : Task[] = [];
      private todosData:string[]=[];
      
      

      constructor(private http:HttpClient) {}

      getCurrentTask(){  
            return this.http.get<Task[]>(this.url+'index.php/task?token='+this.tokenID+'&uid=2')
      } 

      saveTask(data){
            data.token = this.tokenID;
            data.uid = 2; 
            console.log(data)
            //return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : "IN002", password: '123' },{headers: new HttpHeaders().set('Content-Type', 'application/json')}); 
            return this.http.post<any>(this.url+'index.php/task/create', data) 
      } 

      updateTask(data, taskid){ 
            data.token = this.tokenID;
            data.uid = 2;  
            console.log(data)
            return this.http.post<any>(this.url+'index.php/task/update/'+taskid, data) 
      } 

      updateTaskStatus(taskId, status, ast, aet){
            let data = new Task();
            data.token = this.tokenID;
            data.uid = 2;
            data.task_status = this.evaluateStatus(status);
            if(status === 4 || status === 1){data.actual_start_time = ast}            
            if(status===2){data.actual_end_time = aet;}
            return this.http.post<any>(this.url+'index.php/task/status/'+taskId, data);
      }

      completeTask(taskId, status, aet){
            let data = new Task();
            data.token = this.tokenID;
            data.uid = 2;
            data.task_status = this.evaluateStatus(status);  
            data.actual_end_time = aet; 
            return this.http.post<any>(this.url+'index.php/task/status/'+taskId, data);
      }

      pauseAllTask(taskId){
            //update all other tasks status based on updateTastStatus() function
      }

      evaluateStatus(status){
            if(status===1){
                  return 2;  
            }
            if(status===2){
                  return 4;  
            }
            if(status===3){
                  return 3
            }
            if(status===4){
                  return 2
            }
      }

      
}