import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskDetailsService } from '../../services/task-details.service';


@Component({
  selector: 'app-task-create-arun',
  templateUrl: './task-create-arun.component.html',
  styleUrls: ['./task-create-arun.component.css']
})
export class TaskCreateArunComponent implements OnInit {

  DefaultValue=null;
  public choice = 'Newbuild';
  createTask:object = {
        convergeID:''
  };

  JobType=[
        {value:'Newbuild'},{value:'Refresh'},{value:'Revisions'},{value:'Issues'}
      ];

  Complexity:string[]=['Simple','Medium','Complex'];
  Publishers:string[]=['WM','CVS','DG'];
  POCS:string[]=['Bill','Khary','Noble'];
  Status:string[]=['InProgress', 'YetToStart'];
  issue_type:string[]=['Alignment-issues','Content changes','Functionality-issues','Screen-size-issues','Cross-browser-issues'] 
  schStart:any;
  schEnd:any;
  actStart:any;
  actEnd:any;

//   testData = {
//         "token" : "$1$2zVydAgV$7GHtV1pofpYGRWxC1qCUq.",
//         "uid" : "2",
//         "converge_id": "00001_000_PNG",
//         "jobtype": "New",
//         "complexity":"3",
//         "scheduled_start_date":"2018-02-07",
//         "scheduled_end_date":"2018-02-11",
//         "publisher":"WM",
//         "pocs":"BILL",
//         "scheduled_hours":"24"
//         }

        constructor(private http:TaskDetailsService, private router:Router) {  }
        
              ngOnInit() {
        
              }
        
              createNewTask(){
                    //console.log(this.actStart)
              }
        
              onSubmit(data){
                    console.log(data)
                    this.http.createTaskDB(data).subscribe(
                          (data)=>{
                                console.log(data);
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
}
