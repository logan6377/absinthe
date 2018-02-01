import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';  
import { MyPipesModule } from '../services/mypipes.module';

@NgModule({
  imports: [
    CommonModule,
    MyPipesModule
  ],
  declarations: [TaskListComponent],
  exports:[TaskListComponent]
})
export class TaskListModule { }
