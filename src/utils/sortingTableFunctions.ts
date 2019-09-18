export const sortByPoints = (pointsTeamA: number, pointsTeamB: number): 1 | -1 => {
  if (pointsTeamA < pointsTeamB) {
    return 1;
  }
  if (pointsTeamA > pointsTeamB) {
    return -1;
  }
  // TODO: How to get around issue where returning in sort cant return 'void'
  return -1;
};

export const sortByGoalDifference = (goalDifferenceTeamA: number, goalDifferenceTeamB: number): 1 | -1 => {
  if (goalDifferenceTeamA < goalDifferenceTeamB) {
    return 1;
  }
  if (goalDifferenceTeamA > goalDifferenceTeamB) {
    return -1;
  }
  // TODO: How to get around issue where returning in sort cant return 'void'
  return -1;
};

export const sortByGoalsScored = (goalsScoredTeamA: number, goalsScoredTeamB: number): 1 | -1 => {
  if (goalsScoredTeamA < goalsScoredTeamB) {
    return 1;
  }
  if (goalsScoredTeamA > goalsScoredTeamB) {
    return -1;
  }
  // TODO: How to get around issue where returning in sort cant return 'void'
  return -1;
};
