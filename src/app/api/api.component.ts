import { Component, OnInit } from '@angular/core'; 
import { DatabaseService } from './database.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  logan:string;

  constructor(private db:DatabaseService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.logan = this.db.test()
  } 

  method1Call() {
    this.httpClient.get("http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/book?token=$1$Se5o48aF$jYc.BcM.NHAHS9YDXL4C8.&user-id=1", {}).subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  method2Call() {
    this.httpClient.post("http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/book/", {'username':'admin', 'password':'Admin123$'}, {headers: new HttpHeaders().set('content-type', 'text/plain')}).subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }




}
