import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { calculateResult } from '~/utils/calculateResult';

describe('calculateResult()', () => {

  it('should return a win', () => {
    expect(calculateResult(1, 0)).toEqual(ResultTypeEnum.Win);
  });

  it('should return a draw', () => {
    expect(calculateResult(1, 1)).toEqual(ResultTypeEnum.Draw);
  });

  it('should return a loss', () => {
    expect(calculateResult(1, 2)).toEqual(ResultTypeEnum.Lose);
  });

});
