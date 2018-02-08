import { Component, OnInit } from '@angular/core'; 
import { Task } from '../task';
import { TaskDetailsService } from '../../services/task-details.service';


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
      Status:string[]=['In Progress', 'Yet to start']

      schStart:any;
      schEnd:any;
      actStart:any;
      actEnd:any;

      constructor(private http:TaskDetailsService) {  }

      ngOnInit() {

      }

      createNewTask(){
            //console.log(this.actStart)
      }

      onSubmit(data){
            this.http.addNewTask(data);
      }

}
