import { Injectable } from '@angular/core';
import { Task } from '../task/task'; 
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Location } from '@angular/common';
import { Router } from '@angular/router/src/router';


@Injectable()
export class TaskDetailsService {  
  task : Task[] = [ 
    {
      taskID:123456,convergeID:'01_000_ABCD_123456',jobtype :'New Build',complexity:'Simple',scheduled_start_date:new Date("2016-01-16T16:00:00"),scheduled_end_date:new Date("2016-01-16T16:00:00"),status:'InProgress',publisher:'WM',pocs:'Bill Edgington',jobComments:'Sample job description',scheduled_hours:32,totalFunctionality:10,functionalityDetails:'Sample functionality description',editReason:'Sample edit description',actualStart:new Date("2016-01-16T16:00:00"),actualEnd:new Date("2016-01-16T16:00:00"),actualHours:16,tokenId:'ABCDEF123456'
    },
    {
      taskID:123456,convergeID:'25_555_ABCD_123456',jobtype :'New Build',complexity:'Simple',scheduled_start_date:new Date("2016-01-16T16:00:00"),scheduled_end_date:new Date("2016-01-16T16:00:00"),status:'YetToStart',publisher:'CVS',pocs:'Khary',jobComments:'Sample job description',scheduled_hours:32,totalFunctionality:10,functionalityDetails:'Sample functionality description',editReason:'Sample edit description',actualStart:new Date("2016-01-16T16:00:00"),actualEnd:new Date("2016-01-16T16:00:00"),actualHours:16,tokenId:'ABCDEF123456'
    },
    {
      taskID:123456,convergeID:'04_012_ABCD_123456',jobtype :'New Build',complexity:'Simple',scheduled_start_date:new Date("2016-01-16T16:00:00"),scheduled_end_date:new Date("2016-01-16T16:00:00"),status:'Completed',publisher:'DG',pocs:'Katy',jobComments:'Sample job description',scheduled_hours:32,totalFunctionality:10,functionalityDetails:'Sample functionality description',editReason:'Sample edit description',actualStart:new Date("2016-01-16T16:00:00"),actualEnd:new Date("2016-01-16T16:00:00"),actualHours:16,tokenId:'ABCDEF123456'
    }
    
  ];

  todosData:string[]=[];
  

  constructor(private http:HttpClient) {
  } 
  
  getCurrentTask(){  
    return this.task
  } 


  addNewTask(newtask){
    console.log(newtask)
    this.task.push(newtask)
    console.log(this.task) 
  }

  //return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { empid : username, password: password },{headers: new HttpHeaders().set('Content-Type', 'application/json')},)

  createTaskDB(newtask){
      return this.http.post<any>('http://10.98.20.104/trackR/index.php/task/create', 
      {
            token : "$1$2zVydAgV$7GHtV1pofpYGRWxC1qCUq.",
            uid : "2",
            converge_id: "Logan",
            jobtype: "Refresh",
            complexity:"3",
            scheduled_start_date:"2018-02-07",
            scheduled_end_date:"2018-02-11",
            publisher:"WM",
            pocs:"BILL",
            scheduled_hours:"24"
      }
            
      )
      /*.pipe(
            catchError(this.handleError('addHero', newtask))
      )*/
  }

  handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
      } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
      }
      // return an ErrorObservable with a user-facing error message
      return new ErrorObservable(
            'Something bad happened; please try again later.');
      };
  

}
