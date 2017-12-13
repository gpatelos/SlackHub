import { Message } from './message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message('chatty chat mcboatface magoo')).toBeTruthy();
  });
});
