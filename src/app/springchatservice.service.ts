import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SpringchatserviceService {

  private lastMessageId = 0;
  private postMessageURL: string = "http://localhost:8080/messages";

  constructor(private _http: HttpClient) {
  }



  // getMessageById(id: number): Message {
  //   return this.messages
  //     .filter(message => message.messageId === id)
  //     .pop();
  // }

  // getMessages(): Observable<Message[]> {
  //    return this.ourObservable;
  //   //return of(this.messages)
  // }

  addMessage(message: Message): Observable<Message> {
    // console.log("addMessage called");
    // if (!message.messageId) {
    //   message.messageId = ++this.lastMessageId;
    //   console.log("addMessage id assigned");
    // }
    //
    // console.log(message);

  //  var jsonTest: String = " {\"messageId\": 15\,\"messageBody\": \"so you want to be a service.\"\,\"timeStamp\": \"2017-12-19T01:50:25.338+0000\"\,\"userId\": 1}"
    let test = JSON.stringify(message);
    console.log(test);
    return this._http.post<Message>(this.postMessageURL, test).subscribe(
        res => {
          console.log(res);
        };

  }
  //
  // deleteMessageById(id: number): ChatService {
  //   this.messages = this.messages
  //               .filter(messages => messages.messageId !== id);
  //     return this;
  // }

  // editMessageById(id: number, editedMessage: Object = {}): Message {
  //   let message = this.getMessageById(id);
  //   if(!message) {
  //     return null;
  //   }
  //   Object.assign(message, editedMessage);
  //   return message;
  // }

  // private handleError(err: HttpErrorResponse){
  //   console.log(err.message);
  //   return Observable.throw(err.message);
  // }

}
