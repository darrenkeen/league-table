import { ITeamModel } from './TeamModel';

export interface IMatchModel {
  date: string;
  team1: ITeamModel;
  team2: ITeamModel;
  score1: number;
  score2: number;
}
