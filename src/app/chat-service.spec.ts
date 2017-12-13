import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat-service';
import {IMessage} from './imessage';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
  it('get all messages', inject([ChatService], (service: ChatService) => {
    expect(service.getMessages().length).toBe(2);
  }));
  it('get message by id', inject([ChatService], (service: ChatService) => {
    expect(service.getMessageById(2).messageId).toBe(2);
  }));
  it('get all messages', inject([ChatService], (service: ChatService) => {
    expect(service.getMessages().length).toBe(2);
  }));
});
