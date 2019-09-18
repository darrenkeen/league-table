import { ITeamStats } from '~/models';

export const calculateGoalDifference = ({ scored, conceded }: ITeamStats): number => {
  return scored - conceded;
};
