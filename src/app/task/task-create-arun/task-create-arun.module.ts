import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskCreateArunComponent } from './task-create-arun.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSwitch } from '@angular/common';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule
  ],
  declarations: [TaskCreateArunComponent],
  exports:[TaskCreateArunComponent]
})
export class TaskCreateArunModule { }
