import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';

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

  schStart:any;
  schEnd:any;
  actStart:any;
  actEnd:any; 

  constructor() { }

  ngOnInit() {
    

    this.currentTask = {
      convergeID:this.tasks.converge_id,
      jobtype:this.tasks.jobtype,
      complexity:this.tasks.complexity,
      publisher:this.tasks.publisher,
      pocs:this.tasks.pocs,
      schHours:this.tasks.scheduled_hours,
      task_status:this.tasks.task_status,
      comments:this.tasks.job_comments
    };
  }

  onSubmit(formData){
    console.log(formData===this.currentTask);
    console.log(formData);
    console.log(this.currentTask);
  }

}
