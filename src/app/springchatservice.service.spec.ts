import { TestBed, inject } from '@angular/core/testing';

import { SpringchatserviceService } from './springchatservice.service';

describe('SpringchatserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpringchatserviceService]
    });
  });

  it('should be created', inject([SpringchatserviceService], (service: SpringchatserviceService) => {
    expect(service).toBeTruthy();
  }));
});
