import { WinTypeEnum } from './WinTypeEnum';

export interface ITeamStats {
  code: string;
  name: string;
  winCount: number;
  loseCount: number;
  drawCount: number;
  scored: number;
  conceded: number;
  points: number;
  form: WinTypeEnum[];
}
