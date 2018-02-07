import { Component, OnInit   } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
import { Task } from '../task';   

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit { 
  taskdata:Task[]; 
  
  constructor(private http:TaskDetailsService ) { 
    this.taskdata = this.http.getCurrentTask(); 
   }

  ngOnInit() {
    
  } 

  

  createNewTask(){ 
    let newTask = new Task();
    newTask.TASK_ID = 123456;
    newTask.STATUS = 'Completed';

    this.http.addNewTask(Object.assign({}, newTask)); 
  }  
  

}
