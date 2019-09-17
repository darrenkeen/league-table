import { IMatch, IRound, ITeamStats, WinTypeEnum, ITeamMatchStats, IMatchTeamsStats } from '~/models'
import { getAwardedPoints } from '~/utils/getAwardedPoints';

import * as data from '../json/data.json';
import { tableHTML } from '../templates/table';

const calculateResult = (scoreFor: number, scoreAgainst: number) => {
  const difference = scoreFor - scoreAgainst;
  return difference > 0 ? WinTypeEnum.Win : difference === 0 ? WinTypeEnum.Draw : WinTypeEnum.Lose;
};

const saveTeamsResult = (currentTeam: ITeamMatchStats) => {
  const teamInArray = teamStats.findIndex((team: ITeamStats) => team.code === currentTeam.code);
  if (teamInArray > -1) {
    //TODO: Use dictionary
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

data.rounds.forEach((round: IRound) => {
  const parsedMatches: IMatchTeamsStats[] = round.matches.map((match: IMatch) => ({
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

teamStats.sort((firstTeam, secondTeam) => {
  if (firstTeam.points < secondTeam.points) {
    return 1
  }
  if (firstTeam.points > secondTeam.points) {
    return -1
  }
  if ((firstTeam.scored - firstTeam.conceded) < (secondTeam.scored - secondTeam.conceded)) {
    return 1
  }
  if ((firstTeam.scored - firstTeam.conceded) > (secondTeam.scored - secondTeam.conceded)) {
    return -1
  }
  if (firstTeam.scored < secondTeam.scored) {
    return 1
  }
});

const tableRowsHTML = () => {
  let rows: string = '';
  teamStats.forEach((team: ITeamStats, index) => {
    rows += `<tr>
      <td>${index + 1}</td>
      <td>${team.name}</td>
      <td>${team.form.length}</td>
      <td>${team.winCount}</td>
      <td>${team.drawCount}</td>
      <td>${team.loseCount}</td>
      <td>${team.scored}</td>
      <td>${team.conceded}</td>
      <td>${team.scored - team.conceded}</td>
      <td>${team.points}</td>
    </tr>`;
  });
  return rows;
};

document.getElementById('app').innerHTML = tableHTML(tableRowsHTML());
