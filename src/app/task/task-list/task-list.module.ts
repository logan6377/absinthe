import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from './task-list.component';  
import { PipesModule } from '../../pipes/pipes.module'; 
import { TaskCreateModule } from '../task-create/task-create.module';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule, 
    FormsModule,
    NgbModule,
    TaskCreateModule,
    BrowserAnimationsModule
  ],
  declarations: [TaskListComponent, TaskProgressComponent],
  exports:[TaskListComponent, TaskProgressComponent]
})
export class TaskListModule { }
