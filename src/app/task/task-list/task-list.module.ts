import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from './task-list.component';  
import { PipesModule } from '../../pipes/pipes.module'; 
import { TaskCreateModule } from '../task-create/task-create.module';
import { TaskCreateComponent } from '../task-create/task-create.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    NgbModule,
    TaskCreateModule,
    BrowserAnimationsModule
  ],
  declarations: [TaskListComponent],
  exports:[TaskListComponent]
})
export class TaskListModule { }
