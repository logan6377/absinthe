import { Component, OnInit   } from '@angular/core';
import { TaskDetailsService } from '../services/task-details.service';
import { Task } from '../task';  
import { Tasklist } from '../services/tasklist';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit { 
  taskdata; 
  
  constructor(private http:TaskDetailsService ) { 
    this.taskdata = this.http.getCurrentTask(); 
   }

  ngOnInit() {
    
  } 

  addNewTask(){ 
    this.http.addNewTask({
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
      ACTUAL_HOURS:16,TOKEN_ID:'ABCDEF123456'
    });      
  }  
  

}
