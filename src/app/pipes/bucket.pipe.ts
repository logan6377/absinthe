import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task/task';

@Pipe({
  name: 'bucket',
  pure: false
})
export class BucketPipe implements PipeTransform {
  task:Task[]=[];
  transform(value: Task[], args1?: any, args2?: any): any { 
    //console.log('value',args2)
    this.task=[];   
    for(let i=0; i<value.length; i++){   
      if(value[i].task_status == args1 || value[i].task_status == args2){  
        this.task.push(value[i])
      } 
    }   
    
    return this.task; 
    
  }

}
