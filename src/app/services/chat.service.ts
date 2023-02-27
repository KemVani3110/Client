import { ChatModel } from './../models/chat.model';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  // getMessagesByRoomId(roomId : string)
  // {
  //   // const channel = 'message-' + roomId;
  //   // return this.socket.fromEvent(channel);

  // }

  sendMessage(msg : any)
  {
    this.socket.emit('message', msg);
  }

  getMessage(roomId : string){
   return this.socket.fromEvent(`message-${roomId}`)
  }
  // sendMessageByRoom(data: ChatModel){
  //   return this.socket.emit('message', data)
  // }
}
