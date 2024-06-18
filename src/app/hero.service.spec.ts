import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('Hero Service', () => {
  let httpTestingController: HttpTestingController; //ยิงลม ปิ้วๆ
  let service: HeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, MessageService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
  });

  describe('getHeroes', () => {
    it('should call get method with url correctly', () => {
      //Arrange
      //ทำไว้ด้านบนหมดแล้ว
      //Action
      //subscribe ส่องของในท่อ
      service.getHero(2).subscribe();
      //Assert
      const req = httpTestingController.expectOne('api/heroes/2');
      req.flush({ id: 2, name: 'Iron man', strength: 100 });
      expect(req.request.method).toBe('GET');
      httpTestingController.verify();
    });
  });
});
