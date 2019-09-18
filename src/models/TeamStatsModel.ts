import { ResultTypeEnum } from './ResultTypeEnum';

export interface ITeamStats {
  name: string;
  winCount: number;
  loseCount: number;
  drawCount: number;
  scored: number;
  conceded: number;
  points: number;
  form: ResultTypeEnum[];
}

export const INITIAL_TEAM_STATS: ITeamStats = {
  name: '',
  winCount: 0,
  loseCount: 0,
  drawCount:0,
  scored: 0,
  conceded: 0,
  points: 0,
  form: [],
};
