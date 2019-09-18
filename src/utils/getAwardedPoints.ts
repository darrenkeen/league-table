import { ResultTypeEnum } from '~/models/ResultTypeEnum';

export const getAwardedPoints = (result: ResultTypeEnum): number => {
  switch (result) {
    case ResultTypeEnum.Win:
      return 3;
    case ResultTypeEnum.Draw:
      return 1;
    default:
      return 0;
  }
};
