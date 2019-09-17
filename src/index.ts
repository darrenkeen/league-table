import { IMatchModel } from '~/models/MatchModel';
import { IRoundModel } from '~/models/RoundModel';
import * as data from './json/data.json';

interface ITeamStats {
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

interface IMatchTeamsStats {
  teams: ITeamMatchStats[];
}

interface ITeamMatchStats {
  code: string;
  name: string;
  scored: number;
  conceded: number;
  result: WinTypeEnum
}

const enum WinTypeEnum {
  Win = 'W',
  Lose = 'L',
  Draw = 'D',
}

const calculateResult = (scoreFor: number, scoreAgainst: number) => {
  const difference = scoreFor - scoreAgainst;
  return difference > 0 ? WinTypeEnum.Win : difference === 0 ? WinTypeEnum.Draw : WinTypeEnum.Lose;
};

const getAwardedPoints = (result: WinTypeEnum) => {
  switch (result) {
    case WinTypeEnum.Win:
      return 3;
    case WinTypeEnum.Draw:
      return 1;
    default:
      return 0;
  }
};

const saveTeamsResult = (currentTeam: ITeamMatchStats) => {
  const teamInArray = teamStats.findIndex((team: ITeamStats) => team.code === currentTeam.code);
  if (teamInArray > -1) {
    const existingTeam = teamStats[teamInArray];
    teamStats[teamInArray] = {
      ...existingTeam,
      scored: existingTeam.scored + currentTeam.scored,
      conceded: existingTeam.conceded + currentTeam.conceded,
      points: existingTeam.points + getAwardedPoints(currentTeam.result),
      winCount: existingTeam.winCount + (currentTeam.result === WinTypeEnum.Win ? 1 : 0),
      drawCount: existingTeam.drawCount + (currentTeam.result === WinTypeEnum.Draw ? 1 : 0),
      loseCount: existingTeam.loseCount + (currentTeam.result === WinTypeEnum.Lose ? 1 : 0),
      form: [...existingTeam.form, currentTeam.result],
    }
  } else {
    teamStats.push({
      code: currentTeam.code,
      name: currentTeam.name,
      scored: currentTeam.scored,
      conceded: currentTeam.conceded,
      points: getAwardedPoints(currentTeam.result),
      winCount: (currentTeam.result === WinTypeEnum.Win ? 1 : 0),
      drawCount: (currentTeam.result === WinTypeEnum.Draw ? 1 : 0),
      loseCount: (currentTeam.result === WinTypeEnum.Lose ? 1 : 0),
      form: [currentTeam.result],
    })
  }
};

const teamStats: ITeamStats[] = [];

data.rounds.forEach((round: IRoundModel) => {
  const parsedMatches: IMatchTeamsStats[] = round.matches.map((match: IMatchModel) => ({
    teams: [{
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
    }],
  }));

  parsedMatches.forEach((match: IMatchTeamsStats) => {
    match.teams.forEach((team: ITeamMatchStats) => saveTeamsResult(team));
  })
});


