import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-progress',
  template: `
      <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" [ngStyle]="progressed()"></div>
      </div>
  `,
  styles:[`
      .progress{
           height:0.3rem;
           margin-top:3px
      }
  `] 
})
export class TaskProgressComponent implements OnInit {

      @Input() task;
      private progressValue = 70;

 
      constructor() { }
 
      ngOnInit() { 
            let actualStartTime = new Date(this.task.actual_start_time);

            console.log(Date.parse(this.task.actual_start_time))
      }

      progressed(){
            let styles = {
                  'width':this.progressValue+'%',
                  'background-color': this.task.task_status==2 ? '#3576cf' : '#9c9b9b'
            }
            return styles
      }

      percentage(){
            console.log(this.task.actual_start_time)
      }

}
