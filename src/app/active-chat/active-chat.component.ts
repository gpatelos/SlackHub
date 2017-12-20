import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { ChatService } from '../service/chat-service';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {

     public windowTitle = 'Active Chat Window';
     messages: Message[];

     constructor(private _chatService: ChatService) { }

     //errorMessage: String;
     // constructor(private _chatService: ChatService) { }

     // ngOnInit(): void {
     //      this.fetchMessages();
     // }
     //
     //
     // fetchMessages(): void {
     //      this._chatService.getMessagesObservable()
  	 //                       .subscribe( messages => this.messages = messages,
     //                                      error => this.errorMessage = <any>error);
     // }


  ngOnInit(): void {
  this._chatService.getMessages().subscribe(data => {
    this.messages = data;
  });
  }

}
