import { IMatchModel } from './MatchModel';

export interface IRoundModel {
  name: string;
  matches: IMatchModel[];
}
