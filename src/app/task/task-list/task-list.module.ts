import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from './task-list.component';  
import { PipesModule } from '../../pipes/pipes.module';
import { TaskCreateFormComponent } from './task-create-form/task-create-form.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    NgbModule
  ],
  declarations: [TaskListComponent, TaskCreateFormComponent],
  exports:[TaskListComponent, TaskCreateFormComponent]
})
export class TaskListModule { }
