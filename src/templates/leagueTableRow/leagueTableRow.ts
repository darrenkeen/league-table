import { ITeamStats } from '~/models/TeamStatsModel';

export const leagueTableRowHTML = (team: ITeamStats, position: number) => `<tr>
    <td>${position}</td>
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
