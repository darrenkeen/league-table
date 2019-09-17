import { WinTypeEnum } from '~/models';

export const getAwardedPoints = (result: WinTypeEnum): number => {
  switch (result) {
    case WinTypeEnum.Win:
      return 3;
    case WinTypeEnum.Draw:
      return 1;
    default:
      return 0;
  }
};
