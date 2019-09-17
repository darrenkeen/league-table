export const tableHTML = (rows: string) => `
  <table>
    <thead>
      <th>#</th>
      <th>Team</th>
      <th>P</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      <th>GS</th>
      <th>GC</th>
      <th>GD</th>
      <th>Points</th>
    </thead>
    <tbody class="league-table__body">
      ${rows}
    </tbody>
  </table>
`;
