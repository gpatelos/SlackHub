import { Component, OnInit , Input } from '@angular/core';
import {ChatService} from '../service/chat-service';
import {Message} from '../model/message';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
})

export class PostToActiveChatComponent {

constructor(private _chatService: ChatService) { }

  // message: Message = new Message();
  // messageContent:string;
   messages: Message[];
  // errorMessage: String;

  // addMessage(): void {
  // this._chatService.addMessageObservable(this.message)
  //                  .subscribe( message => {
  // 			                     this.fetchMessages();
  //                            this.reset();
  // 		                       this.messageContent = message.messageContent;
  // 			                     },
  //                            error => this.errorMessage = <any>error);
  //    }

  //    private reset() {
  //        this.message.messageContent = null;
  //   	   this.errorMessage = null;
  //   	   this.messageContent = null;
  //      }
  //
  // fetchMessages(): void {
  //     this._chatService.getMessagesObservable()
  //   	                       .subscribe( messages => this.messages = messages,
  //                                           error => this.errorMessage = <any>error);
  // }

  onClick(input: any): void {
    this._chatService.addMessage(input.value);
    input.value="";
  }


  ngOnInit() {

  }
}
