export class Message {

  messageId: number;
  messageBody: string;
  timeStamp: any;
  userId: number;

  static nextMessageId: number = 1;

  constructor(messageBody?:string, userId?: number) {
      this.messageBody = messageBody;
      this.userId = userId;

      this.timeStamp = new Date(Date.now());
      this.messageId = Message.nextMessageId;
      Message.nextMessageId++;

      this.userId =3;
  }

  public toString():string {
    let toStringOutput = "{\"messageId\": " + this.messageId + ", \"messageBody\": \"" + this.messageBody +"\", \"timeStamp\": \""+ this.timeStamp + "\", \"userId\": "+this.userId +" }"
    return toStringOutput;
  }
}
