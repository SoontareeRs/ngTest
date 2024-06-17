/* * *
* lesson 2: component test
there are 4 function
- ngOnInit()
- getHeroes()
- add(name: string)
- delete(hero: Hero)
*/
// import { of } from 'rxjs';
// import { HeroesComponent } from './heroes.component';

// // step1 : describe
// describe('Heroes Component', () => {
//   // step2: to specific function => describe && it
//   describe('Delete', () => {
//     it('should remove some hero when send some hero', () => {
//       // Arrange
//       // step4: mockData
//       const HEROS_MOCK = [
//         { id: 1, name: 'Ultra man', strength: 10 },
//         { id: 2, name: 'Iron man', strength: 5 },
//         { id: 3, name: 'Goku', strength: 2 },
//       ];
//       // const realHeroService = new HeroService(); ต่อกับข้างนอกของจริง (ไม่ควรทำ)
//       // step5: fakeService ชื่อฟังก์ที่ใช้ต้องตรงกับชื่อฟังก์ชั่นของจริง
//       const fakeHeroService = jasmine.createSpyObj(['deleteHero']);

//       // step3: ประกาศ new instance ของ HeroesComponent วัตถุที่สร้างขึ้นจากคลาสคอมโพเนนต์
//       let component = new HeroesComponent(fakeHeroService);
//       // step6:
//       component.heroes = HEROS_MOCK; //กำหนดข้อมูลจำลองฮีโร่ให้กับคุณสมบัติ heroes ของคอมโพเนนต์
//       fakeHeroService.deleteHero.and.returnValue(of(true)); //"of" return ท่อ เป็นความสามารถของ rxjs, เตรียมของโดยเรียกฟังก์ชั่น DeleteHeroes ของ hero.service.ts

//       // Action เรียกใช้ฟังก์ชัน delete
//       // step7:
//       component.delete(HEROS_MOCK[1]);
//       // Assert
//       // step8:
//       expect(component.heroes.length).toBe(2);
//     });
//   });
//   // step9: ลองทำข้อมูลขา get
//   describe('getHeroes', () => {
//     it('should have hero list from empty when call get hero', () => {
//       const HEROS_MOCK = [
//         { id: 1, name: 'Ultra Man', strength: 10 },
//         { id: 2, name: 'Iron  Man', strength: 5 },
//         { id: 3, name: 'Goku', strength: 3 },
//       ];
//       const fakeHeroService = jasmine.createSpyObj(['getHeroes']);
//       let component = new HeroesComponent(fakeHeroService);
//       fakeHeroService.getHeroes.and.returnValue(of(HEROS_MOCK));

//       component.getHeroes();

//       expect(component.heroes.length).toBe(3);
//     });
//   });
// });

///refactor code แบบที่นิยม///
import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('Heroes Component', () => {
  let HEROS_MOCK, fakeHeroService, component;
  // beforeEach ทำก่อนเข้า it ทุกครั้ง
  beforeEach(() => {
    HEROS_MOCK = [
      { id: 1, name: 'Ultra Man', strength: 10 },
      { id: 2, name: 'Iron  Man', strength: 5 },
      { id: 3, name: 'Goku', strength: 3 },
    ];
    fakeHeroService = jasmine.createSpyObj(['deleteHero', 'getHeroes']);
    component = new HeroesComponent(fakeHeroService);
  });

  describe('Delete', () => {
    it('should remove some hero when send some hero', () => {
      // Arrange
      component.heroes = HEROS_MOCK;
      fakeHeroService.deleteHero.and.returnValue(of(true));
      //Action
      component.delete(HEROS_MOCK[1]);
      // Assert

      expect(component.heroes.length).toBe(2);
    });
  });

  describe('getHeroes', () => {
    it('should have hero list from empty when call get hero', () => {
      //Arrange เตรียมของโดยเรียกฟังก์ชั่น getHeroes ของ hero.service.ts เพราะต้องมีสิ่งนี้ก่อนถึงจะทำ Action ได้
      fakeHeroService.getHeroes.and.returnValue(of(HEROS_MOCK));
      //Action เรียกฟังก์ชั่นจากคลาสของ HeroesComponent
      component.getHeroes();
      //Assert
      expect(component.heroes.length).toBe(3);
    });
  });

});
