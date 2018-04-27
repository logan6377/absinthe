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

      changeTaskStatus(id, status){  

            let startHours = this.taskdata.find(item => item.task_id === id) 

            let ast = this.currentTime(status);
            console.log('ast',ast)
            let aet = this.pauseTime(status, startHours.actual_start_time);
            
            this.task.updateTaskStatus(id,status,ast,aet)
            .subscribe(
                  (data)=>{
                        console.log(data)
                  },
                  err =>{
                        console.error(err)
                  }
            );

            //to update local data

            for(let i=0; i<this.taskdata.length; i++){
                  if(this.taskdata[i].task_id==id){
                        //this.actHours = this.taskdata[i].actual_hours;
                        this.taskdata[i].task_status = this.evaluateStatus(status)
                  }else{
                        if(this.taskdata[i].task_status==2){
                              this.taskdata[i].task_status = 1;
                        }
                  } 
            } 

      }

      onTaskComplete(id, status){   
            let aet = this.endTime(status);

            this.task.completeTask(id,status,aet)
            .subscribe(
                  (data)=>{
                        console.log(data)
                  },
                  err =>{
                        console.error(err)
                  }
            );

            //to update local data
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
                  return 4;  
            }
            if(status===3){
                  return 3
            }
            if(status===4){
                  return 2
            }
      }

      currentTime(status){
            if(status===1){ 
                  return this.utcConversion();
            }            
      }

      endTime(status){
            if(status===3){ 
                  return this.utcConversion();
            }            
      }

      pauseTime(status, startHours){
            if(status===2){ 
                  this.actHours = this.actualHours(startHours, this.utcConversion());
                  console.log(this.actHours)
                  return this.utcConversion();
            }else{
                  return null
            }
      }

      utcConversion(){
            let dateConversion = new Date();
            let utc = new Date(dateConversion.getTime() + dateConversion.getTimezoneOffset() * 60000); 
            return utc;
      }

      actualHours(startDate, endDate) { 
            var minutesWorked = 0; 
            if (endDate < startDate) { return 0; } 
            var current = startDate;
         
            var workHoursStart = 9;
            var workHoursEnd = 17.5;
            var includeWeekends = true; 

            while(current <= endDate){
                  var currentTime = current.getHours() + (current.getMinutes() / 60);
                  if(currentTime >= workHoursStart && currentTime <= workHoursEnd 
                        && (includeWeekends ? current.getDay() !== 0 && current.getDay() !== 6 : true)){ 
                        minutesWorked++;
                  } 
                current.setTime(current.getTime() + 1000 * 60);
            } 
            return Math.round(minutesWorked / 60 * 100) / 100;
        }

        startEnd(){

        }


}
