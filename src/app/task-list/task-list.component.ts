import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../services/task-details.service';
import { Task } from '../task';  
import { Tasklist } from '../services/tasklist';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  hdata
  taskdata  
  
  constructor(private http:TaskDetailsService) { }

  ngOnInit() {
    this.taskdata = this.http.getCurrentTask(); 
  } 

  addNewTask(){ 
    let newtask = new Task();
    newtask.CONVERGE_ID = "ABCD" 

    this.http.addNewTask(newtask)  
  }

  getHabitica(){
    this.hdata = this.http.habitica();
    console.log('aaa----',this.hdata)
  }

}
