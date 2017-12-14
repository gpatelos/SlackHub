import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat-service';
import {Message} from '../message';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
  providers: [ChatService]
})
export class PostToActiveChatComponent implements OnInit {

  constructor(private _chatService: ChatService) { }

  newMessage: Message = new Message();

  addMessage() {
    this._chatService.addMessage(this.newMessage);
    this.newMessage = new Message(); 
  }

  ngOnInit() {
  }

}
