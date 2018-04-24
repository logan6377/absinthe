import { Component, OnInit} from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';
import { TaskDetailsService } from '../../services/task-details.service';
import { Task } from '../task';   

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit { 
      private taskdata:Task[];
      private addActive:boolean = false 
      private showList:boolean=false;
      private opened:boolean = true
      private showForm = {};
      private previous;
      private taskStatus:boolean;
      private actHours;

      constructor(private task:TaskDetailsService ) { 
            this.showForm = {};
            this.task.getCurrentTask()
            .subscribe( 
                  (data) => {
                        this.taskdata=data;
                        this.showList=true;
                        //console.log(this.taskdata)
                  },
                  err => console.error(err),
                  //() => //console.log('done')
            ) 
      }

      ngOnInit() {
            
      }  

      openTaskDetail(current){ 
            this.opened = !this.opened
            this.addActive = !this.addActive
            if(this.previous){
                  this.showForm[this.previous] = !this.showForm[this.previous];
            }
            this.previous = current;
            this.showForm[current] = !this.showForm[current];
      }

      changeTaskStatus(item){ 

            console.log('status', status)

            for(let i=0; i<this.taskdata.length; i++){
                  if(this.taskdata[i].task_id==item.task_id){
                        //this.actHours = this.taskdata[i].actual_hours;
                        this.taskdata[i].task_status = this.evaluateStatus(status)
                  }else{
                        if(this.taskdata[i].task_status==2){
                              this.taskdata[i].task_status = 1;
                        }
                  } 
            }

            this.task.updateTaskStatus(item.task_id,item.task_status,this.actHours)
            .subscribe(
                  (data)=>{
                        console.log(data)
                  },
                  err =>{
                        console.error(err)
                  }
            );
 
            

      }

      onTaskComplete(id, status){  
            this.task.updateTaskStatus(id,status, this.actHours)
            .subscribe(
                  (data)=>{
                        console.log(data)
                  },
                  err =>{
                        console.error(err)
                  }
            );
           for(let i=0; i<this.taskdata.length; i++){
                  if(this.taskdata[i].task_id==id){
                        this.taskdata[i].task_status = status;
                  } 
            }
            console.log(this.taskdata)
      }

      evaluateStatus(status){
            if(status===1){
                  return 2;  
            }
            if(status===2){
                  return 1;  
            }
            if(status===3){
                  return 3
            }
      }


}
