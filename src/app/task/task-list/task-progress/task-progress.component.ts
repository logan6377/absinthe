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
      private dailyhrs = 8.5;
      private weekendcout;
 
      constructor() { }
 
      ngOnInit() { 
            let sleepHours = '15:30:00';
            let actualStartTime = new Date('2018-04-12 18:30:00'); //new Date('2018-03-01 18:30:00')
            let actualEndTime =  new Date('2018-04-15 03:00:00'); // 3 + 18:30:00 to 23:45:00
            //this.weekendcout = this.weekends(actualStartTime, actualEndTime)
            let actualStartTimeEST = actualStartTime.toLocaleString("en-US", {timeZone: "America/New_York"});
            let actualEndTimeEST = actualEndTime.toLocaleString("en-US", {timeZone: "America/New_York"});
            //console.log('timezone', new Date(actualStartTimeEST), new Date(actualEndTimeEST))
           //console.log('weekend', this.workingHoursBetweenDates(new Date(actualStartTimeEST), new Date(actualEndTimeEST))) 
 
      }
      progressed(){
            let styles = {
                  'width':this.progressValue+'%', 
                  'background-color': this.task.task_status==2 ? '#3576cf' : '#9c9b9b'
            }
            return styles;
      }
      percentage(){
            //console.log(this.task.actual_start_time)
      }
      hourseBetween(date1, date2) { 
            return Math.abs(date2.getTime() - date1.getTime()) / 3600000
      }
      daysBetween(date1, date2){
            let start = Math.floor(date1.getTime() / (3600 * 24 * 1000)); 
            let end = Math.floor(date2.getTime() / (3600 * 24 * 1000));
            return end - start; 
      }
      dailyHours(totalhours, days, start, end){ 
           if(days==0){ 
                  return totalhours
           }else{ 
                 //console.log('aa', (start.getTime() / (3600 * 24 * 1000)))
                  let firstHalf = 24 - (start.getTime() / (3600 * 24 * 1000));
                  let secondHalf = (end.getTime() / (3600 * 24 * 1000)) - 15.30; 

                  return (firstHalf+secondHalf)+this.dailyhrs*(days-this.weekendcout)
           }
      }
      weekends(start, end){
            var weekendDays = 0;
            var dayMilliseconds = 1000 * 60 * 60 * 24;

            while (start <= end) {
                  var day = start.getDay();
                  if (day == 0 || day == 6) {
                        weekendDays++;
                  }
                  start = new Date(+start + dayMilliseconds);
            } 

            return weekendDays
      }
      workingHoursBetweenDates(startDate, endDate) { 
            var minutesWorked = 0; 
            if (endDate < startDate) { return 0; } 
            var current = startDate;
         
            var workHoursStart = 9;
            var workHoursEnd = 17.5;
            var includeWeekends = true; 

            while(current <= endDate){
                  var currentTime = current.getHours() + (current.getMinutes() / 60);
                  if(currentTime >= workHoursStart && currentTime <= workHoursEnd 
                        && (includeWeekends ? current.getDay() !== 0 && current.getDay() !== 6 : true)){ 
                        minutesWorked++;
                  } 
                current.setTime(current.getTime() + 1000 * 60);
            } 
            return Math.round(minutesWorked / 60 * 100) / 100;
        }

}