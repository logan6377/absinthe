import { Component, OnInit } from '@angular/core'; 
import { Task } from '../task';
import { TaskDetailsService } from '../../services/task-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit { 

      DefaultValue=null;
      
      createTask:object = {
            convergeID:''
      };

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

      constructor(private saveTask:TaskDetailsService, private router:Router) {  }

      ngOnInit() {

      } 

      onSubmit(data:Task){
            //console.log(data)
            data.scheduled_start_date = this.dateFormat(data.scheduled_start_date);
            data.scheduled_end_date = this.dateFormat(data.scheduled_end_date);            
            this.saveTask.saveTask(data).subscribe(
                  (data)=>{
                        //console.log(data);
                        this.resetForm(); 
                        this.router.navigate(['task-list']);
                  }
      );
             
      }

      resetForm(){
            this.createTask = {
                  convergeID:''
            };  
      }

      dateFormat(data){
            let convertDate = Object.values(data);
            return convertDate.join('-')
      }

}
