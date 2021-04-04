import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io, Socket} from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;


  constructor() { }

  initSocket(){
    this.socket = io('http://localhost:7860', { transports : ['websocket'] })
  }

  sendMessage(msg: { to: string; from: any; msg: string; time: string; }){
    this.socket.emit('onClientMsg', msg)
  }

  
  getMessage(){
    
    return new Observable((observer)=>{
      this.socket.on('onServerMsg', (msg: unknown)=>{
        observer.next(msg)
      })
    })
  }
  
  onlineUsers(){
 

    return new Observable((observer)=>{
      this.socket.on('onlineUsers', (userList)=>{
        observer.next(userList)
      })
    })
  }

//  onlineUsers(){
//   let observable = new Observable<{userLis : any[]}>(observer=>{
//    this.socket.on("onlineUsers", (userList)=>{
//     observer.next(userList)
//    });
//  })
//  return observable
//  }
  join(username: any){
    this.socket.emit('join',{username : username})
  }

  
}
