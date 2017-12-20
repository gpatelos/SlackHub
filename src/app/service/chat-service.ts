import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatService {
private uri = 'http://localhost:8080/chat/messages';

constructor(private http: Http) {}

  getMessages(): Observable<Message[]> {
    return this.http.get(this.uri).map((response:Response) => response.json());
  }

  addMessage(input:string) {
    let newMessage:Message = new Message(input);
    console.log("addMessage from ChatService");
    this.http.post(this.uri,newMessage).subscribe((response:Response) => response);
  }

  // getMessagesObservable(): Observable<Message[]> {
  //   return this.http.get(this.url)
	// 	                    .map(this.extractData);
  //    }
  //
  // addMessageObservable(message:Message): Observable<Message> {
  //   return this.http.post(this.url, message)
  //                   .map(this.extractData);
  //   }
  //
  // private extractData(response: Response) {
	//    let body = response.json();
  //         return body.data || {};
  //   }
  //
  // private handleErrorObservable (error: Response | any) {
  //   	console.error(error.message || error);
  //   	return Observable.throw(error.message || error);
  //       }

}
