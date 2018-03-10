import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCompletedComponent } from './task-completed.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    NgModule,
    CommonModule,
    PipesModule
  ],
  declarations: [TaskCompletedComponent],
  exports:[TaskCompletedComponent]
})
export class TaskCompletedModule { }
