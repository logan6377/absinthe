import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrls: ['./task-completed.component.css']
})
export class TaskCompletedComponent implements OnInit {

      private taskCompleted:Task[];
      private showList:boolean=false;

      constructor(private _taskdata:TaskDetailsService) {
            this._taskdata.getCurrentTask().subscribe(
                  (data) => {
                        this.taskCompleted = data;
                        this.showList = true
                  },
                  err => console.error(err),
                  () => console.log('done')
            )
      }

      ngOnInit() {
      }

}
