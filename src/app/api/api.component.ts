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
    this.httpClient.get("https://habitica.com/api/v3/user", {headers: new HttpHeaders().set("x-api-user", "a91af8db-e4d4-42bb-b034-935cdd439670").set("x-api-key", "6c4a887a-d5b9-4a92-b919-74d6dd918e02")}).subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  method2Call() {
    this.httpClient.post("http://10.98.20.100/simple-codeigniter-rest-api-master/index.php/auth/login", {'username':'admin', 'password':'Admin123$'}, {headers: new HttpHeaders().set('content-type', 'text/plain')}).subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }




}
