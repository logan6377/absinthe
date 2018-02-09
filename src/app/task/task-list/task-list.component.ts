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
      console.log(this.taskdata) 
   }

  ngOnInit() {
    
  } 

  

  createNewTask(){ 
    let newTask = new Task();
    newTask.taskID = 123456;
    newTask.status = 'Completed';

    this.http.addNewTask(Object.assign({}, newTask)); 
  }  
  

}
