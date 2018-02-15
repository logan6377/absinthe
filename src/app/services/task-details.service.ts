import { Injectable } from '@angular/core';
import { Task } from '../task/task'; 
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Location } from '@angular/common';
import { Router } from '@angular/router/src/router';
import{ Observable } from 'rxjs/Observable';


@Injectable()
export class TaskDetailsService { 

      private tokenID = '$1$j1.AXhn7$n/Mt5OpsXXRXFR1qA6GaQ.'
      task : Task[] = [];
      todosData:string[]=[];
  

      constructor(private http:HttpClient) {
      } 
      
      getCurrentTask(){  
            return this.http.get<Task[]>('http://10.98.20.104/trackR/index.php/task?token='+this.tokenID+'&uid=2')
      } 

      createTaskDB(){

      // return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : "IN002", password: '123' },{headers: new HttpHeaders().set('Content-Type', 'application/json')}); 
            return this.http.post<any>('http://10.98.20.104/trackR/index.php/task/create', {
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
