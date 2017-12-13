import {IMessage} from './imessage';

export class Message implements IMessage{
  messageId: number;
  messageBody: String;
  messageSent: String;

  constructor(body: string, sent?: string) {
    this.messageBody = body;
    this.messageSent = sent;
  }
}
