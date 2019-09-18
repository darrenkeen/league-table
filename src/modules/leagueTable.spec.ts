import { IMatch } from '~/models/MatchModel';
import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { ITeamMatchStats } from '~/models/TeamMatchStatsModel';
import { ITeamStats } from '~/models/TeamStatsModel';
import { calculateResult } from '~/utils';
import { getAllTeamsInRoundReducer, getSortedTeamStats, parseTeamsInMatchReducer } from './leagueTable';

describe('leagueTable.ts', () => {

  describe('parseTeamsInMatchReducer()', () => {
    it('should return the correct array', () => {
      const match: IMatch = {
        date: '2016-08-13',
        team1: {
          key: 'burnley',
          name: 'Burnley',
          code: 'BUR',
        },
        team2: {
          key: 'swansea',
          name: 'Swansea',
          code: 'SWA',
        },
        score1: 0,
        score2: 1,
      };

      expect(parseTeamsInMatchReducer([], match)).toEqual([{
        name: match.team1.name,
        code: match.team1.code,
        scored: match.score1,
        conceded: match.score2,
        result: calculateResult(match.score1, match.score2),
      }, {
        name: match.team2.name,
        code: match.team2.code,
        scored: match.score2,
        conceded: match.score1,
        result: calculateResult(match.score2, match.score1),
      }]);
    });
  });

  describe('getAllTeamsInRoundReducer()', () => {
    it('should return all teams in the round', () => {
      const team: ITeamMatchStats = {
        code: 'code',
        name: 'name',
        scored: 1,
        conceded: 2,
        result: ResultTypeEnum.Win,
      };

      expect(getAllTeamsInRoundReducer([], team)).toEqual([team]);
    });
  });

  describe('getSortedTeamStats()', () => {
    it('should return all teams and their stats', () => {
      const teams: { [key: string]: ITeamStats } = {
        second: {
          name: 'Second',
          winCount: 1,
          loseCount: 0,
          drawCount: 1,
          scored: 3,
          conceded: 2,
          points: 4,
          form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
        },
        fourth: {
          name: 'Fourth',
          winCount: 0,
          loseCount: 1,
          drawCount: 1,
          scored: 2,
          conceded: 3,
          points: 1,
          form: [ResultTypeEnum.Lose, ResultTypeEnum.Draw],
        },
        third: {
          name: 'Third',
          winCount: 1,
          loseCount: 0,
          drawCount: 1,
          scored: 2,
          conceded: 1,
          points: 4,
          form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
        },
        first: {
          name: 'First',
          winCount: 1,
          loseCount: 0,
          drawCount: 1,
          scored: 3,
          conceded: 0,
          points: 4,
          form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
        },
      };
      expect(getSortedTeamStats(teams)).toEqual([teams.first, teams.second, teams.third, teams.fourth]);
    });
  });

});
