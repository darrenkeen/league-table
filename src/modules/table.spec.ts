import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { ITeamStats } from '~/models/TeamStatsModel';
import { tableRowsHTML } from '~/modules/table';

describe('calculateGoalDifference()', () => {

  it('should return 1', () => {

    const teamStats: ITeamStats[] = [
      {
        name: 'First',
        winCount: 1,
        loseCount: 0,
        drawCount: 1,
        scored: 3,
        conceded: 0,
        points: 4,
        form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
      },
      {
        name: 'Second',
        winCount: 1,
        loseCount: 0,
        drawCount: 1,
        scored: 3,
        conceded: 2,
        points: 4,
        form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
      },
      {
        name: 'Third',
        winCount: 1,
        loseCount: 0,
        drawCount: 1,
        scored: 2,
        conceded: 1,
        points: 4,
        form: [ResultTypeEnum.Win, ResultTypeEnum.Draw],
      },
      {
        name: 'Fourth',
        winCount: 0,
        loseCount: 1,
        drawCount: 1,
        scored: 2,
        conceded: 3,
        points: 1,
        form: [ResultTypeEnum.Lose, ResultTypeEnum.Draw],
      },
    ];

    const outputHTML: string = `<tr>
    <td>1</td>
    <td>First</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>3</td>
    <td>0</td>
    <td>3</td>
    <td>4</td>
    <td><span class="form-block--W">W</span><span class="form-block--D">D</span></td>
  </tr><tr>
    <td>2</td>
    <td>Second</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>4</td>
    <td><span class="form-block--W">W</span><span class="form-block--D">D</span></td>
  </tr><tr>
    <td>3</td>
    <td>Third</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>4</td>
    <td><span class="form-block--W">W</span><span class="form-block--D">D</span></td>
  </tr><tr>
    <td>4</td>
    <td>Fourth</td>
    <td>2</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>-1</td>
    <td>1</td>
    <td><span class="form-block--L">L</span><span class="form-block--D">D</span></td>
  </tr>`;

    expect(tableRowsHTML(teamStats).trim()).toEqual(outputHTML.trim());
  });

});
