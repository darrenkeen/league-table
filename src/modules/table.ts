import { ITeamStats } from '~/models/TeamStatsModel';
import { leagueTableRowHTML, leagueTableHTML } from '~/templates';
import { allTeamsStats, getSortedTeamStats } from './leagueTable';

export const tableRowsHTML = (teamStats: { [key: string]: ITeamStats }) => {
  let rows: string = '';
  getSortedTeamStats(teamStats).forEach((team: ITeamStats, index: number) => {
    rows += leagueTableRowHTML(team, index + 1);
  });
  return rows;
};

document.getElementById('app').innerHTML = leagueTableHTML(tableRowsHTML(allTeamsStats));
