import { Component, OnInit, Input } from '@angular/core';
import { Task, Dates } from '../../task';
import { TaskDetailsService } from '../../../services/task-details.service';

@Component({
  selector: 'app-task-create-form',
  templateUrl: './task-create-form.component.html',
  styleUrls: ['./task-create-form.component.css']
})
export class TaskCreateFormComponent implements OnInit {

  @Input() tasks:Task;

  DefaultValue=null;
    
  currentTask:object = {};
  

  JobType:string[]=['New Build','Refresh','Issues'];
  Complexity:string[]=['Simple','Medium','Complex'];
  Publishers:string[]=['WM','CVS','DG'];
  POCS:string[]=['Bill','Khary','Noble'];
  Status:string[]=['InProgress', 'YetToStart'];
  scheduled_hours:number;
  dateFormats:Dates;

  schStart;
  
  schEnd:any;
  actStart:any;
  actEnd:any;  

  constructor(private updateTask:TaskDetailsService) { }

  ngOnInit() {   

      this.schStart=this.dateFormat(this.tasks.scheduled_start_date);
      this.schEnd=this.dateFormat(this.tasks.scheduled_end_date);
      
      this.currentTask = {            
            jobtype:this.tasks.jobtype,
            converge_id:this.tasks.converge_id,
            complexity:this.tasks.complexity,
            publisher:this.tasks.publisher,
            pocs:this.tasks.pocs,
            schHours:this.tasks.scheduled_hours,
            task_status:this.tasks.task_status,
            comments:this.tasks.job_comments,
            schStart:this.schStart,
            schEnd:this.schEnd
      };  
  }

  onSubmit(formData){
    console.log(this.jsonEqual(formData,this.currentTask));
    console.log('formData',formData);
    console.log('currentTask',this.currentTask);
    formData.scheduled_start_date = this.dateFormatString(formData.scheduled_start_date);
    formData.scheduled_end_date = this.dateFormatString(formData.scheduled_end_date);
    this.updateTask.updateTask(formData, this.tasks.task_id).subscribe(
        (data)=>{
              console.log(data); 
        },
        err => console.error(err)
    )
  }

  dateFormat(date){
      let changeToDateFormat = date.split('-');
      this.dateFormats = {
            year:parseInt(changeToDateFormat[0]),
            day:parseInt(changeToDateFormat[2]),
            month:parseInt(changeToDateFormat[1]) 
      }   
      return this.dateFormats 
  }
  
  dateFormatString(data){
    let convertDate = Object.values(data);
    return convertDate.join('-')
}
  jsonEqual(a,b){
     return JSON.stringify(a) === JSON.stringify(b);
  }

}
