import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-progress',
  template: `
      <div class="progress"> {{datee}}
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
      private datee;
 
      constructor() { }
 
      ngOnInit() { 
            let sleepHours = '15:30:00';
            let actualStartTime = new Date('2018-03-01 18:30:00')
            let actualEndTime =  new Date('2018-03-02 23:45:00') // 3 + 18:30:00 to 23:45:00
            //this.datee= Math.abs(actualEndTime.getTime() - actualStartTime.getTime()) / 3600000
            console.log(this.hourseBetween(actualStartTime,actualEndTime), this.daysBetween(actualStartTime,actualEndTime))

            console.log('UtilizedHours', this.dailyHours(this.hourseBetween(actualStartTime,actualEndTime),this.daysBetween(actualStartTime,actualEndTime), actualStartTime))
      }

      progressed(){
            let styles = {
                  'width':this.progressValue+'%',
                  'background-color': this.task.task_status==2 ? '#3576cf' : '#9c9b9b'
            }
            return styles;
      }

      percentage(){
            console.log(this.task.actual_start_time)
      }

      hourseBetween(date1, date2) { 
            return Math.abs(date2.getTime() - date1.getTime()) / 3600000
      }

      daysBetween(date1, date2){
            let start = Math.floor(date1.getTime() / (3600 * 24 * 1000)); 
            let end = Math.floor(date2.getTime() / (3600 * 24 * 1000));
            return end - start; 
      }

      dailyHours(totalhours, days, start){ 
           if(days==0){
                  return totalhours
           }else{ 
                  let value = 24 - Math.floor(start.getTime() / (3600 * 24 * 1000));
                  let value2 = Math.floor(start.getTime() / (3600 * 24 * 1000)) - 15.30;
                  console.log(8.3*(days-1))
                  return (value+value2)+8.3*(days-1)
           }
      }

}
