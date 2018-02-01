import { Injectable } from '@angular/core';
import { Task } from '../task'; 
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
 

@Injectable()
export class TaskDetailsService {  
  httpClient: any;

  private task : Task[] = [ 
    {
      TASK_ID:123456,
      CONVERGE_ID:'01_555_ABCD_123456',
      JOBTYPE :'New Build',
      COMPLEXITY:'Simple',
      SCHEDULED_START_DATE:new Date("2016-01-16T16:00:00"),
      SCHEDULED_END_DATE:new Date("2016-01-16T16:00:00"),
      STATUS:'InProgress',
      PUBLISHER:'WM',
      POCS:'Bill Edgington',
      JOB_COMMENTS:'Sample job description',
      SCHEDULED_HOURS:32,
      TOTAL_NO_OF_FUNCTIONALITIES:10,
      FUNCTIONALITY_DETAILS:'Sample functionality description',
      EDIT_REASON:'Sample edit description',
      ACTUAL_START_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_END_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_HOURS:16,
      TOKEN_ID:'ABCDEF123456'
    },
    {
      TASK_ID:323426,
      CONVERGE_ID:'25_555_ABCD_123456',
      JOBTYPE :'New Build',
      COMPLEXITY:'Simple',
      SCHEDULED_START_DATE:new Date("2016-01-16T16:00:00"),
      SCHEDULED_END_DATE:new Date("2016-01-16T16:00:00"),
      STATUS:'YetToStart',
      PUBLISHER:'WM',
      POCS:'Bill Edgington',
      JOB_COMMENTS:'Sample job description',
      SCHEDULED_HOURS:32,
      TOTAL_NO_OF_FUNCTIONALITIES:10,
      FUNCTIONALITY_DETAILS:'Sample functionality description',
      EDIT_REASON:'Sample edit description',
      ACTUAL_START_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_END_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_HOURS:16,
      TOKEN_ID:'ABCDEF123456'
    },{
      TASK_ID:223456,
      CONVERGE_ID:'25_555_ABCD_123456',
      JOBTYPE :'New Build',
      COMPLEXITY:'Simple',
      SCHEDULED_START_DATE:new Date("2016-01-16T16:00:00"),
      SCHEDULED_END_DATE:new Date("2016-01-16T16:00:00"),
      STATUS:'Todo',
      PUBLISHER:'WM',
      POCS:'Bill Edgington',
      JOB_COMMENTS:'Sample job description',
      SCHEDULED_HOURS:32,
      TOTAL_NO_OF_FUNCTIONALITIES:10,
      FUNCTIONALITY_DETAILS:'Sample functionality description',
      EDIT_REASON:'Sample edit description',
      ACTUAL_START_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_END_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_HOURS:16,
      TOKEN_ID:'ABCDEF123456'
    },{
      TASK_ID:423456,
      CONVERGE_ID:'25_555_ABCD_123456',
      JOBTYPE :'New Build',
      COMPLEXITY:'Simple',
      SCHEDULED_START_DATE:new Date("2016-01-16T16:00:00"),
      SCHEDULED_END_DATE:new Date("2016-01-16T16:00:00"),
      STATUS:'InProgress',
      PUBLISHER:'WM',
      POCS:'Bill Edgington',
      JOB_COMMENTS:'Sample job description',
      SCHEDULED_HOURS:32,
      TOTAL_NO_OF_FUNCTIONALITIES:10,
      FUNCTIONALITY_DETAILS:'Sample functionality description',
      EDIT_REASON:'Sample edit description',
      ACTUAL_START_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_END_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_HOURS:16,
      TOKEN_ID:'ABCDEF123456'
    },{
      TASK_ID:563456,
      CONVERGE_ID:'25_555_ABCD_123456',
      JOBTYPE :'New Build',
      COMPLEXITY:'Simple',
      SCHEDULED_START_DATE:new Date("2016-01-16T16:00:00"),
      SCHEDULED_END_DATE:new Date("2016-01-16T16:00:00"),
      STATUS:'Completed',
      PUBLISHER:'WM',
      POCS:'Bill Edgington',
      JOB_COMMENTS:'Sample job description',
      SCHEDULED_HOURS:32,
      TOTAL_NO_OF_FUNCTIONALITIES:10,
      FUNCTIONALITY_DETAILS:'Sample functionality description',
      EDIT_REASON:'Sample edit description',
      ACTUAL_START_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_END_TIME:new Date("2016-01-16T16:00:00"),
      ACTUAL_HOURS:16,
      TOKEN_ID:'ABCDEF123456'
    }
    
  ];

  constructor(private http:HttpClient) { 
  }
  
  getCurrentTask(){  
    return this.task
  }


  addNewTask(newtask){
    this.task.push(newtask)
    console.log(this.task)
  }

  habitica() {
    return this.http.get("https://habitica.com/api/v3/user", {headers: new HttpHeaders().set("x-api-user", "a91af8db-e4d4-42bb-b034-935cdd439670").set("x-api-key", "6c4a887a-d5b9-4a92-b919-74d6dd918e02")}).subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }
  

}
