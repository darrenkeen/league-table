import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { ITeamStats } from '~/models/TeamStatsModel';
import { calculateGoalDifference } from '~/utils/calculateGoalDifference';

describe('calculateGoalDifference()', () => {

  const team: ITeamStats = {
    name: 'Team name',
    winCount: 1,
    loseCount: 0,
    drawCount: 1,
    scored: 3,
    conceded: 2,
    points: 4,
    form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
  };

  it('should return 1', () => {
    expect(calculateGoalDifference(team)).toEqual(1);
  });

  it('should return -1', () => {
    team.scored = 1;
    expect(calculateGoalDifference(team)).toEqual(-1);
  });

  it('should return 0', () => {
    team.scored = 2;
    expect(calculateGoalDifference(team)).toEqual(0);
  });

});
