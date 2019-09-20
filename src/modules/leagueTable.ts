import data from '~/json/data.json';

import { IMatch } from '~/models/MatchModel';
import { IRound } from '~/models/RoundModel';
import { ITeamMatchStats } from '~/models/TeamMatchStatsModel';
import { ITeamStats, INITIAL_TEAM_STATS } from '~/models/TeamStatsModel';
import { ResultTypeEnum } from '~/models/ResultTypeEnum';

import {
  calculateResult,
  sortByGoalsScored,
  sortByPoints,
  sortByGoalDifference,
  getAwardedPoints,
  calculateGoalDifference,
} from '~/utils';

export const parseTeamsInMatchReducer = (accum: ITeamMatchStats[], match: IMatch) => {
  return accum.concat([{
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
};

export const getAllTeamsInRoundReducer = (allTeamsInRound: ITeamMatchStats[], team: ITeamMatchStats) =>
  allTeamsInRound.concat(team);

export const allFixturesInAllRounds: ITeamMatchStats[] =
  data.rounds.reduce((accum: ITeamMatchStats[], round: IRound) => [
    ...accum,
    ...round.matches
      .reduce(parseTeamsInMatchReducer, [])
      .reduce(getAllTeamsInRoundReducer, []),
  ], []);

export const allTeamsStats: { [key: string]: ITeamStats } =
  allFixturesInAllRounds.reduce((allTeams: { [key: string]: ITeamStats }, fixture: ITeamMatchStats) => {
    const selectedTeamsStats = allTeams[fixture.code];
    const { code } = fixture;

    if (!selectedTeamsStats) {
      allTeams[code] = { ...INITIAL_TEAM_STATS, name: fixture.name };
    }
    allTeams[code] = {
      ...allTeams[code],
      scored: allTeams[code].scored + fixture.scored,
      conceded: allTeams[code].conceded + fixture.conceded,
      points: allTeams[code].points + getAwardedPoints(fixture.result),
      winCount: allTeams[code].winCount + (fixture.result === ResultTypeEnum.Win ? 1 : 0),
      drawCount: allTeams[code].drawCount + (fixture.result === ResultTypeEnum.Draw ? 1 : 0),
      loseCount: allTeams[code].loseCount + (fixture.result === ResultTypeEnum.Lose ? 1 : 0),
      form: [...allTeams[code].form, fixture.result],
    };
    return allTeams;
  }, {});

export const getSortedTeamStats = (teams: { [key: string]: ITeamStats }): ITeamStats[] => {
  return Object.values(teams).sort((teamA: ITeamStats, teamB: ITeamStats): 1 | -1 | 0 => {
    if (sortByPoints(teamA.points, teamB.points) !== 0) {
      return sortByPoints(teamA.points, teamB.points);
    }
    if (sortByGoalDifference(calculateGoalDifference(teamA), calculateGoalDifference(teamB)) !== 0) {
      return sortByGoalDifference(calculateGoalDifference(teamA), calculateGoalDifference(teamB));
    }

    if (sortByGoalsScored(teamA.scored, teamB.scored)) {
      return sortByGoalsScored(teamA.scored, teamB.scored);
    }
  });
};

