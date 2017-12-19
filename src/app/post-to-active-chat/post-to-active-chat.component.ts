import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service';
import { SpringchatserviceService } from '../springchatservice.service'
import {Message} from '../message';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
})
export class PostToActiveChatComponent implements OnInit {

//  constructor(private _chatService: ChatService) { }
  constructor(private _springChatService: SpringchatserviceService){
  
}

  newMessage: Message = new Message();

  addMessage() {
    this._springChatService.addMessage(this.newMessage);
    this.newMessage = new Message();
  }

  ngOnInit() {
  }

}
