import { ITeamStats } from '~/models/TeamStatsModel';
import { leagueTableRowHTML } from '~/templates';

export const tableRowsHTML = (teams: ITeamStats[]) => {
  let rows: string = '';
  teams.forEach((team: ITeamStats, index: number) => {
    rows += leagueTableRowHTML(team, index + 1);
  });
  return rows;
};
