import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task/task';

@Pipe({
  name: 'bucket',
  pure: false
})
export class BucketPipe implements PipeTransform {
  task:Task[]=[];
  transform(value: Task[], args?: any): any {
    //console.log(value)
    this.task=[];   
    for(let i=0; i<value.length; i++){  
      if(value[i].STATUS == args){  
        this.task.push(value[i])  
      } 
    }   
    return this.task; 
    
  }

}
