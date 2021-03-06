import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { TaskDetailsService } from './services/task-details.service';

import { TaskListModule } from './task/task-list/task-list.module';
import { TaskCreateModule } from './task/task-create/task-create.module'; 
import { TaskCompletedModule } from './task/task-completed/task-completed.module';

import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { TaskCompletedComponent } from './task/task-completed/task-completed.component';

import { ApiModule } from './api/api.module';
import { DatabaseService } from './api/database.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';  
import { ObserverModule } from './observer/observer.module'; 




const taskRouts:Routes = [
      { path:'task-create', component:TaskCreateComponent},
      { path:'task-list', component:TaskListComponent},
      { path:'task-completed', component:TaskCompletedComponent},
      { path:'', redirectTo:'/task-create', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    TaskListModule,
    TaskCreateModule,
    TaskCompletedModule,
    HttpModule,
    HttpClientModule,
    ApiModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(taskRouts),
    AngularFireModule.initializeApp(environment.firebase),
    ObserverModule
  ],
  providers: [{ 
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
      },TaskDetailsService, DatabaseService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
