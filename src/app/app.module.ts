import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { TaskListModule } from './task-list/task-list.module';
import { TaskDetailsService } from './services/task-details.service'; 
import { ApiModule } from './api/api.module';
import { DatabaseService } from './api/database.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskListModule,
    HttpModule,
    HttpClientModule,
    ApiModule,
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
