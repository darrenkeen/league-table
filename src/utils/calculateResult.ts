import { ResultTypeEnum } from '~/models/ResultTypeEnum';

export const calculateResult = (scoreFor: number, scoreAgainst: number) => {
  const difference = scoreFor - scoreAgainst;
  return difference > 0 ? ResultTypeEnum.Win : difference === 0 ? ResultTypeEnum.Draw : ResultTypeEnum.Lose;
};
