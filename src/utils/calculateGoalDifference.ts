import { ITeamStats } from '~/models/TeamStatsModel';

export const calculateGoalDifference = ({ scored, conceded }: ITeamStats): number => {
  return scored - conceded;
};
