class Election {
  constructor(electionScenario, votingMethod) {
    this.electionScenario = electionScenario;
    this.winnerId = electionScenario.getWinner(votingMethod); // winner is the candidate's id.
  }

  bayesianRegret() {
    // TODO need to investigate what exactly this is scaling and why.
    //ScaleRealVec(NumMethods, B.SRegret, 1.0/((B.NumElections - 1.0)*B.NumElections) ); /*StdDev/sqrt(#) = StdErr.*/
    return this.electionScenario.bestUtility - this.electionScenario.utilitySums[this.winnerId];
  }
}


module.exports = Election;
