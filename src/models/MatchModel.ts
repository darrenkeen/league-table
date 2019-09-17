import { ITeam } from './TeamModel';

export interface IMatch {
  date: string;
  team1: ITeam;
  team2: ITeam;
  score1: number;
  score2: number;
}
