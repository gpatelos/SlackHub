import { Component, OnInit } from '@angular/core';
import { IMessage} from '../imessage';
import {ChatService} from '../chat-service';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {

  public windowTitle = 'Active Chat Window';
  public messages: IMessage[]= [];

  constructor(private _chatService: ChatService) { }

  ngOnInit(): void {
    this.messages = this._chatService.getMessages();
  }

}
