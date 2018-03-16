import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit { 

  private data:Observable<any>;
  private values:Array<number> = [];
  private anyErrors:boolean;
  private finished:boolean; 
  private status

      constructor() { }

  ngOnInit() {
  }

  init() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42); 
          }, 1000);
          
          setTimeout(() => {
              observer.next(43);
          }, 2000);
          
          setTimeout(() => {
              observer.complete();
          }, 3000);
          
          this.status = "Started";
      });

      let subscription = this.data.forEach(
            value => this.values.push(value)
      );
      
      this.status = "Ended";
  }

  

}
