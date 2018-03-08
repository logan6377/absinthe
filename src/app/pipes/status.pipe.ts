import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any { 
        switch(value){
              case "0":
              return "Yet To Start";
              case "1":
              return "In Progress";
              case "2":
              return "Completed"
        } 
  }

}
