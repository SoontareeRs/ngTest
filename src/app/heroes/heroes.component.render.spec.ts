//lesson 5 : Component ที่มี child component
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('Heroes component render', () => {
  let HEROS_MOCK, mockHeroService;
  let fixture: ComponentFixture<HeroesComponent>;
  //mock component
  @Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  //เปรียบเสมือนการ regis component ใน app module
  class ChildFakeHeroComponent {
    @Input() hero: Hero;
  }
  beforeEach(() => {
    HEROS_MOCK = [
      { id: 1, name: 'Ultra Man', strength: 10 },
      { id: 2, name: 'Iron  Man', strength: 5 },
      { id: 3, name: 'Goku', strength: 3 },
    ];
    //mock Service that connect external dependency
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'deleteHero',
      'addHero',
    ]);
    //no mock UI can use this === logic test
    // const component = new HeroesComponent(mockHeroService);

    //ui render
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, ChildFakeHeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provider: HeroService, useValue: mockHeroService }],
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should run heroes component correctly', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROS_MOCK));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);
  })

  it('should create li tag equal 3 hero', () => {
    //arrange
    mockHeroService.getHeroes.and.returnValue(of(HEROS_MOCK));
    //action เมื่อการเปลี่ยนแปลง value ใน ram ตอน render ด้วย testBed ng
    //ต้องใช้คำสั่ง detectChanges() เพื่อ rerender เข้า ram อีกครั้ง
    fixture.detectChanges();
    //assert
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
    //เฉลย
    // expect(fixture.debugElement.queryAll(By.css('li')).length).toEqual(3);
  })
});
