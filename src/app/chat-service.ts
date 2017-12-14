import { Injectable } from '@angular/core';
import {Message} from './message';
import {IMessage} from './imessage';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChatService {

  private _messageUrl = './api/messages/messages.json';
  private messages: IMessage[] = [];
  private lastMessageId = 0;

  constructor(private _http: HttpClient) {}

  // getMessages(): IMessage[] {
  //   return [
  //     {
  //       'messageId': 1,
  //       'messageBody': 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with ' +
  //       'my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on ' +
  //       'a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. ' +
  //       'And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
  //       'messageSent': 'March 18, 2016'
  //
  //     },
  //     {
  //       'messageId': 2,
  //       'messageBody': 'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus ' +
  //       'to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, ' +
  //       'he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?',
  //       'messageSent': 'March 19, 2016'
  //
  //     }
  //   ];
  // }
  getMessages(): Observable<IMessage[]>{
    return this._http.get<IMessage[]>(this._messageUrl)
                  .do(data => console.log('All: '+JSON.stringify(data)))
                  .catch(this.handleError);
}

  getMessageById(id: number): Message {
    return this.messages
      .filter(message => message.messageId === id)
      .pop();
  }

  // getMessages(): Message[] {
  //   return this.messages;
  // }

  addMessage(message: Message): ChatService {
    if (!message.messageId) {
      message.messageId = ++this.lastMessageId;
    }
    this.messages.push(message);
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

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
