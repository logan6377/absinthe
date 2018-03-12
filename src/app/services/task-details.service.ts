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
<<<<<<< HEAD

      private tokenID = '$1$g8/dm8VO$mdqrGQ.eeDEjHIzF.H8Ok/';
      //private url = 'http://10.98.20.104/trackR/';
      private url = 'http://192.168.0.103/trackR/trackR/';      
      private task : Task[] = [];
      private todosData:string[]=[]; 

      private dummyData = {
            "uid": 2,
            "converge_id": "Arumugam",
            "jobtype": "new build",
            "complexity": 2,
            "scheduled_start_date": "2018-02-01",
            "scheduled_end_date": "2018-02-11",
            "task_status": 0,
            "publisher": "CVS",
            "pocs": "Adam",
            "job_comments": null,
            "scheduled_hours": 4,
            "total_no_of_functionalities": null,
            "functionality_details": null,
            "edit_reason": null,
            "actual_start_time": "0000-00-00",
            "actual_end_time": "0000-00-00",
            "actual_hours": null,
            "token": "$1$MHsi7FoY$hOmxaSG0a0iyZNpePiEWr0",
            "updated_at": "2018-02-14 20:42:41"
      }

      constructor(private http:HttpClient) {}

      getCurrentTask(){  
            return this.http.get<Task[]>(this.url+'index.php/task?token='+this.tokenID+'&uid=2')
      } 

      saveTask(data){
            data.token = this.tokenID;
            data.uid = 2;
            //console.log(data)
=======
      private tokenID = '$1$MvU4sjgX$sFTe5ggoINLvU.obVxKUn/';
      private url = 'http://10.98.20.104/trackR/';
      //private url = 'http://192.168.0.100/trackR/trackR/';
      task : Task[] = [];
      todosData:string[]=[]; 
      private dummyData = {
            complexity:"Simple",
            converge_id:"343",
            jobtype:"New Build",
            pocs:"Khary",
            publisher:"CVS",
            scheduled_hours:"32423",
            scheduled_end_date:"2018-02-11",
            scheduled_start_date:"2018-02-07",
            task_status:"1" , 
            token:"$1$CANUGVDL$WMkLpxhtW/DWMN5pWMhSA0",
            uid:2
      }
      constructor(private http:HttpClient) {}
      getCurrentTask(){  
            return this.http.get<Task[]>(this.url+'index.php/task?token='+this.tokenID+'&uid=2')
      } 
      createTaskDB(data){
            data.token = this.tokenID;
            data.uid = 2;
            data.scheduled_start_date = "2018-02-07";
            data.scheduled_end_date ="2018-02-11"; 
            //return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : "IN002", password: '123' },{headers: new HttpHeaders().set('Content-Type', 'application/json')}); 
>>>>>>> 2f076593f247ee6d2f407b52ed1189bfcc475585
            return this.http.post<any>(this.url+'index.php/task/create', data) 
      } 
}
