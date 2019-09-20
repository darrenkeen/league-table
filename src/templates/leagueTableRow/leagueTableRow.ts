import { ITeamStats } from '~/models/TeamStatsModel';
import { renderForm } from '~/utils';

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
    <td>${renderForm(team.form, 5)}</td>
  </tr>`;
