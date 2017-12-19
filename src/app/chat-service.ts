import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ChatService {

  private ourObservable: Observable<Message[]>;
  private messages: Message[] = [];
  private lastMessageId = 0;

  //ourObservable observes this messages

  constructor() {
     this.ourObservable = of(this.messages);
    // this.ourObservable = Observable.interval(500)
    //               .map(msgs=>this.messages);
  }


  getMessageById(id: number): Message {
    return this.messages
      .filter(message => message.messageId === id)
      .pop();
  }

  getMessages(): Observable<Message[]> {
     return this.ourObservable;
    //return of(this.messages)
  }

  addMessage(message: Message): ChatService {
    console.log("addMessage called");
    if (!message.messageId) {
      message.messageId = ++this.lastMessageId;
      console.log("addMessage id assigned");
    }
    this.messages.push(message);

    console.log(message);
    console.log(this.messages);
    return this;
  }

  deleteMessageById(id: number): ChatService {
    this.messages = this.messages
                .filter(messages => messages.messageId !== id);
      return this;
  }

  editMessageById(id: number, editedMessage: Object = {}): Message {
    let message = this.getMessageById(id);
    if(!message) {
      return null;
    }
    Object.assign(message, editedMessage);
    return message;
  }

  // private handleError(err: HttpErrorResponse){
  //   console.log(err.message);
  //   return Observable.throw(err.message);
  // }

}
