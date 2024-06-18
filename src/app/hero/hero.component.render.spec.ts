//lesson 4: UI TEST แบบ HTML
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('Hero Component Render', () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    //สร้าง app module จำลองขึ้นมาก่อน
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    //TestBed สร้างหน้า HTML HeroComponent เก็บไว้ในตัวแปลที่ชื่อว่า fixture
    //fixture เป็นการจอง memory ของเครื่องเราด้วย
    const fixture = TestBed.createComponent(HeroComponent);
  });

  it('should display hero name Goku when input hero is Goku', () => {
    //arrange
    fixture.componentInstance.hero = { id: 1, name: 'Goku', strength: 20 };
    //action

    //assert
    expect(fixture.componentInstance.hero.name).toBe('Goku');
  });

  it('shuld render Goku on tag a when hero is Goku ', () => {
    //arrange
    fixture.componentInstance.hero = { id: 1, name: 'Goku', strength: 20 };

    //action
    fixture.detectChanges();

    //assert tag a มี Goku
    expect(fixture.nativeElement.querySelector('a').textContain('Goku'));
  });
});
