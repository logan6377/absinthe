import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { TaskDetailsService } from './services/task-details.service';
import { TaskListModule } from './task/task-list/task-list.module';
import { TaskCreateModule } from './task/task-create/task-create.module'; 
import { ApiModule } from './api/api.module';
import { DatabaseService } from './api/database.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskListModule,
    TaskCreateModule,
    HttpModule,
    HttpClientModule,
    ApiModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
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
