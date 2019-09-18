import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { getAwardedPoints, ResultTypePointsEnum } from '~/utils/getAwardedPoints';

describe('getAwardedPoints()', () => {

  it(`should return ${ResultTypePointsEnum.Win}`, () => {
    expect(getAwardedPoints(ResultTypeEnum.Win)).toEqual(ResultTypePointsEnum.Win);
  });

  it(`should return ${ResultTypePointsEnum.Draw}`, () => {
    expect(getAwardedPoints(ResultTypeEnum.Draw)).toEqual(ResultTypePointsEnum.Draw);
  });

  it(`should return ${ResultTypePointsEnum.Lose}`, () => {
    expect(getAwardedPoints(ResultTypeEnum.Lose)).toEqual(ResultTypePointsEnum.Lose);
  });
});
