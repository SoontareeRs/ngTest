//lesson 1: Isolation test

import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {

  it('should display 2 (weak) when number is 2', () => {
    //arrange
    let pipe = new StrengthPipe(); //instance of StrengthPipe

    //action
    let result = pipe.transform(2);

    //assert
    expect(result).toBe('2 (weak)');
  });

  it('should display 18 (strong) when number is 18', () => {
    //arrange
    let pipe = new StrengthPipe();

    //action
    let result = pipe.transform(18);

    //assert
    expect(result).toBe('18 (strong)');
  });

  it('should display 33 (unbelievable) when number is 33', () => {
    //arrange
    let pipe = new StrengthPipe();
    //action
    let result = pipe.transform(33);
    //assert
    expect(result).toBe('33 (unbelievable)')
  });
});
