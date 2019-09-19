import { app } from '~/modules/app';

import { allTeamsStats, getSortedTeamStats } from '~/modules/leagueTable';
import { tableRowsHTML } from '~/modules/table';
import { leagueTableHTML } from '~/templates';

document.getElementById('app').innerHTML = (app());

const mainEl = document.getElementsByTagName('main');
if (mainEl.length > 0) {
  mainEl[0].innerHTML = leagueTableHTML(tableRowsHTML(getSortedTeamStats(allTeamsStats)));
}
