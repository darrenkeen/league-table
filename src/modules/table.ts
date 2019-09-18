import { ITeamStats } from '~/models'
import { leagueTableRowHTML, leagueTableHTML } from '~/templates';
import { leagueTable } from '~/utils/buildTeamStats';

const tableRowsHTML = () => {
  let rows: string = '';
  leagueTable.getSortedTeamStats().forEach((team: ITeamStats, index: number) => {
    rows += leagueTableRowHTML(team, index + 1);
  });
  return rows;
};

document.getElementById('app').innerHTML = leagueTableHTML(tableRowsHTML());
