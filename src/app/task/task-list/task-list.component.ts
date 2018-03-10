import { Component, OnInit, transition   } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
import { Task } from '../task';   

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit { 
  taskdata:Task[]; 
  showList:boolean=false;
  
  constructor(private _taskdata:TaskDetailsService ) { 
      this._taskdata.getCurrentTask()
      .subscribe( 
            (data) => {
                  this.taskdata=data;
                  this.showList=true;
                  console.log(this.taskdata)
            },
            err => console.error(err),
            () => console.log('done')
      ) 
   }

  ngOnInit() {
      
  } 

  createNewTask(){ 
    let newTask = new Task();
    newTask.task_id = '123456';
    newTask.task_status = 'Completed';

   // this.http.addNewTask(Object.assign({}, newTask)); 
  }  
  

}
