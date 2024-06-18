//lesson 3: service test แบบไม่ได้ต่อกับข้อมูลด้านนอก
import { MessageService } from '../message.service';

describe('MessageComponent', () => {
  describe('add', () => {
    it('should empty message when not call add', () => {
      //arrange
      let service = new MessageService();
      //action
      // not call 
      //assert
      expect(service.messages.length).toBe(0);
    });

    it('should have message when call add', () => {
      //arrange
      let service = new MessageService();
      //action
      service.add('Hello');
      //assert
      expect(service.messages.length).toBe(1);
    });

  });
  describe('clear', () => {
    it('should remove all message when call clear', () => {
      //arrange
      let service = new MessageService();
      service.messages = ['Hello', 'World'];
      //action
      service.clear();
      //assert
      expect(service.messages.length).toBe(0);
    });
  });
});
