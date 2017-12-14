import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat-service';
import {IMessage} from './imessage';
import {Message} from './message';
import set = Reflect.set;


describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
  it('get empty array of messages', inject([ChatService], (service: ChatService) => {
    expect(service.getMessages()).toEqual([]);
  }));
  it('get populated array of messages', inject([ChatService], (service: ChatService) => {
    const message1 = new Message('Hi MOM');
    const message2 = new Message('Hi DAD');
    service.addMessage(message1);
    service.addMessage(message2);
    expect(service.getMessages()).toEqual([message1, message2]);
  }));
  it('get message by id', inject([ChatService], (service: ChatService) => {
    const message = new Message('Hi SIS');
    service.addMessage(message);
    expect(service.getMessageById(1)).toBe(message);
  }));
  it('delete message by id', inject([ChatService], (service: ChatService) => {
    const message1 = new Message('Hi BRO');
    const message2 = new Message('WAT UP CUZ!');
    service.addMessage(message1);
    service.addMessage(message2);
    service.deleteMessageById(1);
    service.deleteMessageById(2);
    expect(service.getMessages()).toEqual([]);
  }));
  it('edit message by id', inject([ChatService], (service: ChatService) => {
    const message = new Message('Hi Doggez');
    service.addMessage(message);
    const editedMessage = new Message('Hi Doggie');
    const newMessage = service.editMessageById(1, editedMessage);
    expect(newMessage.messageBody).toEqual('Hi Doggie');
  })); 
});
