<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service';
import { SpringchatserviceService } from '../springchatservice.service'
import {Message} from '../message';
=======
import { Component, OnInit , Input } from '@angular/core';
import {ChatService} from '../service/chat-service';
import {Message} from '../model/message';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Response} from '@angular/http';
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
})
export class PostToActiveChatComponent {

//  constructor(private _chatService: ChatService) { }
  constructor(private _springChatService: SpringchatserviceService){
  
}

<<<<<<< HEAD
  newMessage: Message = new Message();

  addMessage() {
    this._springChatService.addMessage(this.newMessage);
    this.newMessage = new Message();
  }

  ngOnInit() {
=======
  onClick(input: any): void {
    this._chatService.addMessage(input.value);
    input.value="";
>>>>>>> 618bb421267c5d10b6eb3ecf18951a19b7cd341c
  }
}
