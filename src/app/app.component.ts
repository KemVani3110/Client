import { ChatService } from './services/chat.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';
  // chat$!: Observable<any>;
  // messages: any[] = [];

  // roomID: string = '';
  // newMessage: string = '';
  // userName: string = '';

  newRoom!: string;
  userName!: string;
  newMessage !: string;
  messages$ !: Observable<any>
  messages: any[] = []
  constructor(private ChatGPT : ChatService) {}

  sendMessages()
  {
    let newMsg = {
      from: this.userName,
      msg: this.newMessage,
      roomId: this.newRoom
    }
    this.ChatGPT.sendMessage(newMsg);
  }

  ngOnInit()
  {

  }

  joinRoom()
  {
    this.messages$ = this.ChatGPT.getMessage(this.newRoom);
    this.messages$.subscribe((msg : any) => {
      this.messages.push(msg);
      console.log(msg);
    })
  }
  // joinRoom(roomID : string){
  //   if(roomID || this.userName)
  //   {
  //     console.log('Already Joined in: ', roomID)
  //     this.chat$ = this.ChatService.getMessagesByRoomId(roomID);
  //     this.chat$.subscribe((message : any) => {
  //     return this.messages.push(message);
  //   })
  //   }else{
  //     window.alert('Please fill in the room id and your name!')
  //   }
  // }

  // sendMessages(message: string)
  // {
  //   let newMessageData: ChatModel = {
  //     roomID: this.roomID,
  //     msg: message,
  //     date: Date.now(),
  //     from: this.userName,
  //   }
  //   this.ChatService.sendMessageByRoom(newMessageData);
  // }
}
