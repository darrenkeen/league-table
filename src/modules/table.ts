import { ITeamStats } from '~/models/TeamStatsModel'
import { leagueTableRowHTML, leagueTableHTML } from '~/templates';
import { getSortedTeamStats } from './leagueTable';

const tableRowsHTML = () => {
  let rows: string = '';
  getSortedTeamStats().forEach((team: ITeamStats, index: number) => {
    rows += leagueTableRowHTML(team, index + 1);
  });
  return rows;
};

document.getElementById('app').innerHTML = leagueTableHTML(tableRowsHTML());
