import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat-service';
import { Message } from '../message';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor(public _chatService: ChatService) { }

  getMessages(): void{
      this._chatService.getMessages().subscribe(messages => this.messages = messages);
  }
  ngOnInit() {
      this.getMessages();

  }

}
