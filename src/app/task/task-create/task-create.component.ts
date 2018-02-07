import { Component, OnInit } from '@angular/core'; 
import { Task } from '../task';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit { 

      createTask:object = {};
      JobType:string[]=['Complexity'];
      JobTypes:string[]=['Simple','Medium','Complex'];


      schStart:any;
      schEnd:any;
      actStart:any;
      actEnd:any;

      constructor() {  }

      ngOnInit() {

      }

      createNewTask(){
      console.log(this.actStart)
      }

      onSubmit(data){
            console.log(data)
      }

}
