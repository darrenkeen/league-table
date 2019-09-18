import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { ITeamStats } from '~/models/TeamStatsModel';
import { calculateGoalDifference } from '~/utils/calculateGoalDifference';
import { sortByPoints, sortByGoalDifference, sortByGoalsScored } from './sortingTableFunctions';

describe('sortingTableFunctions.ts', () => {
  describe('sortByPoints()', () => {
    const teamA: ITeamStats = {
      name: 'TeamA',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 3,
      conceded: 2,
      points: 4,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };
    const teamB: ITeamStats = {
      name: 'TeamB',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 3,
      conceded: 2,
      points: 2,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };

    it(`should return -1`, () => {
      expect(sortByPoints(teamA.points, teamB.points)).toEqual(-1);
    });

    it(`should return 1`, () => {
      teamB.points = 5;
      expect(sortByPoints(teamA.points, teamB.points)).toEqual(1);
    });

    it(`should return 0`, () => {
      teamB.points = 4;
      expect(sortByPoints(teamA.points, teamB.points)).toEqual(0);
    });
  });

  describe('sortByGoalDifference()', () => {
    const teamA: ITeamStats = {
      name: 'TeamA',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 3,
      conceded: 2,
      points: 4,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };
    const teamB: ITeamStats = {
      name: 'TeamB',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 2,
      conceded: 2,
      points: 2,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };

    it(`should return -1`, () => {
      expect(sortByGoalDifference(calculateGoalDifference(teamA), calculateGoalDifference(teamB))).toEqual(-1);
    });

    it(`should return 1`, () => {
      teamB.scored = 4;
      expect(sortByGoalDifference(calculateGoalDifference(teamA), calculateGoalDifference(teamB))).toEqual(1);
    });

    it(`should return 0`, () => {
      teamB.scored = 3;
      expect(sortByGoalDifference(calculateGoalDifference(teamA), calculateGoalDifference(teamB))).toEqual(0);
    });
  });

  describe('sortByGoalsScored()', () => {
    const teamA: ITeamStats = {
      name: 'TeamA',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 3,
      conceded: 2,
      points: 4,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };
    const teamB: ITeamStats = {
      name: 'TeamB',
      winCount: 1,
      loseCount: 0,
      drawCount: 1,
      scored: 2,
      conceded: 2,
      points: 2,
      form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
    };

    it(`should return -1`, () => {
      expect(sortByGoalsScored(teamA.scored, teamB.scored)).toEqual(-1);
    });

    it(`should return 1`, () => {
      teamB.scored = 4;
      expect(sortByGoalsScored(teamA.scored, teamB.scored)).toEqual(1);
    });

    it(`should return 0`, () => {
      teamB.scored = 3;
      expect(sortByGoalsScored(teamA.scored, teamB.scored)).toEqual(0);
    });
  });
});
