import { Component, OnInit} from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';
import { TaskDetailsService } from '../../services/task-details.service';
import { Task } from '../task';   

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
      trigger('ngIfAnimation', [
          transition('void => app-task-create', [
              query('app-task-create', style({ opacity: 0, background: 'blue' }), {optional: true}),
              query('app-task-create', stagger('300ms', [
                  animate('0.8s ease-in', keyframes([
                      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                      style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                      style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
                      ])
                  )]), {optional: true}),
              ]),
          /* transition('* => void', [
              query('*', style({ opacity: 1, background: 'red' }), {optional: true}),
              query('*', stagger('300ms', [
                  animate('0.8s ease-in', keyframes([
                      style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                      style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                      style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
                      ])
                  )]), {optional: true}),
              ]) */
          ])
      ]
})
export class TaskListComponent implements OnInit { 
  private taskdata:Task[];
  private addActive:boolean = false 
  private showList:boolean=false;
  private opened:boolean = true
  private showForm = {};
  private previous;  

  constructor(private _taskdata:TaskDetailsService ) { 
      this.showForm = {};
      this._taskdata.getCurrentTask()
      .subscribe( 
            (data) => {
                  this.taskdata=data;
                  this.showList=true;
                  console.log(this.taskdata)
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
}
