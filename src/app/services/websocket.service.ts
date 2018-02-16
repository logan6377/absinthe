import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;
  private tokenID = '$1$f4H5yZdo$5KEFwfIkVqwIfz6YRsHxz0';

  constructor() { }

  connect():Rx.Subject<MessageEvent>{

    this.socket = io('http://192.168.0.100/trackR/trackR/index.php/task?token='+this.tokenID+'&uid=2');

    let observable = new Observable( observer =>{
      this.socket.on('message', (data)=>{
        console.log('Message received');
        observer.next(data);
      })
      return ()=>{
        this.socket.disconnect();
      }
    });

    let observer = {
      next:(data)=>{
        this.socket.emit('message',JSON.stringify(data))
      }
    }

    return Rx.Subject.create(observable, observer)
  }

}
