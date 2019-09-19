import { ResultTypeEnum } from '~/models/ResultTypeEnum';

export interface ITeamMatchStats {
  code: string;
  name: string;
  scored: number;
  conceded: number;
  result: ResultTypeEnum;
}
