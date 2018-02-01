import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';

@Pipe({
  name: 'publisher'
})
export class PublisherPipe implements PipeTransform {

  walmart: Task[] = [] 

  transform(value: Task[], args?: any): any {  
    console.log(value)
    for(let i=0; i<value.length; i++){ 
      if(value[i].PUBLISHER == "Walmart"){  
       // console.log(value[i])
        this.walmart.push(value[i])
      } 
    }  

  return this.walmart
    
  }

}
