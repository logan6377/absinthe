import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'; 
import { Task, Dates } from '../task';
import { TaskDetailsService } from '../../services/task-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'] 
})
export class TaskCreateComponent implements OnInit { 

      @Input() tasks:Task; 
      private pageValue;
      private currentpage:boolean = false;
      private currentTask:object = {};
      private JobType:string[]=['Job Type','New Build','Refresh','Issues'];
      private Complexity:string[]=['Complexity','Simple','Medium','Complex'];
      private Publishers:string[]=['Publisher','WM','CVS','DG'];
      private POCS:string[]=['POCs','Bill','Khary','Noble'];
      private Status:string[]=['Status','InProgress', 'YetToStart'];
      private scheduled_hours:number;
      private schStart:any;
      private schEnd:any;
      private actStart:any;
      private actEnd:any; 
      private dateFormats:Dates;

      constructor(private task:TaskDetailsService, private router:Router) {  }

      ngOnInit() { 
            if(this.tasks) { 
                  console.log(this.tasks) 
                  this.currentpage = !this.currentpage
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
            }else{ 
                  this.currentTask = {
                        converge_id:'',
                        jobtype:'Job Type',
                        complexity:'Complexity',
                        publisher:'Publisher',
                        pocs:'POCs',
                        task_status:'Status'
                  }  
            }
      } 

      onSubmit(data){
            data.scheduled_start_date = this.dateFormatString(data.scheduled_start_date);
            data.scheduled_end_date = this.dateFormatString(data.scheduled_end_date);   
            data.complexity = this.complexIndex(data.complexity);
            data.task_status = this.statusIndex(data.task_status);

            if(this.tasks)  { 
                  this.task.updateTask(data, this.tasks.task_id).subscribe(
                        (data)=>{
                              console.log(data); 
                        },
                        err => console.error(err)
                  ); 
            }else{
                  this.task.saveTask(data).subscribe(
                        (data)=>{
                              console.log(data);
                              this.resetForm(); 
                              this.router.navigate(['task-list']);
                        },
                        err => console.error(err)
                  ); 
            }
      }

      resetForm(){ 
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
        complexIndex(data){
              console.log(this.Complexity.indexOf(data))
              return this.Complexity.indexOf(data);
        }
        statusIndex(data){
            return this.Status.indexOf(data);
        }

}
