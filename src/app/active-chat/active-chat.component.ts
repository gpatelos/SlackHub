import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from '../chat-service';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {

  public windowTitle = 'Active Chat Window';
  public messages: Message[]= [];


  constructor(private _chatService: ChatService) { }

  ngOnInit(): void {
  this._chatService.getMessages().subscribe(data => {
    this.messages = data;
  },
  error => console.error(error)
  );
  }

}
