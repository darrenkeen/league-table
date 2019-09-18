import { ResultTypeEnum } from '~/models/ResultTypeEnum';

export enum ResultTypePointsEnum {
  Win = 3,
  Draw = 1,
  Lose = 0,
}

export const getAwardedPoints = (result: ResultTypeEnum): number => {
  switch (result) {
    case ResultTypeEnum.Win:
      return ResultTypePointsEnum.Win;
    case ResultTypeEnum.Draw:
      return ResultTypePointsEnum.Draw;
    default:
      return ResultTypePointsEnum.Lose;
  }
};
