import { WinTypeEnum } from '~/models';

export const calculateResult = (scoreFor: number, scoreAgainst: number) => {
  const difference = scoreFor - scoreAgainst;
  return difference > 0 ? WinTypeEnum.Win : difference === 0 ? WinTypeEnum.Draw : WinTypeEnum.Lose;
};
