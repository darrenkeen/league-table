import { WinTypeEnum } from '~/models/WinTypeEnum';

export interface ITeamMatchStats {
  code: string;
  name: string;
  scored: number;
  conceded: number;
  result: WinTypeEnum
}
