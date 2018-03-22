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
  addActive:boolean = false 
  showList:boolean=false;
  showForm = {};
  previous;
  hideRow:boolean = false;
  
  constructor(private _taskdata:TaskDetailsService ) { 
      this.showForm = {};
      this._taskdata.getCurrentTask()
      .subscribe( 
            (data) => {
                  this.taskdata=data;
                  this.showList=true;
                  console.log(this.taskdata)
            },
            err => console.error(err),
            //() => //console.log('done')
      ) 
   }

  ngOnInit() {
      
  } 

  createNewTask(){ 
   // this.http.addNewTask(Object.assign({}, newTask)); 
  }  

  openTaskDetail(current){ 
        this.addActive = !this.addActive
    if(this.previous){
      this.showForm[this.previous] = !this.showForm[this.previous];
    }
    this.previous = current;
    
    this.showForm[current] = !this.showForm[current];
  }
  

}
