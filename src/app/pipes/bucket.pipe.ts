import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task/task';

@Pipe({
  name: 'bucket',
  pure: true
})
export class BucketPipe implements PipeTransform {
  task:Task[]=[];
  transform(value: Task[], args?: any): any { 
    this.task=[];   
    for(let i=0; i<value.length; i++){   
      if(value[i].task_status == args){  
        this.task.push(value[i])  
        
      } 
    }   
    
    return this.task; 
    
  }

}
