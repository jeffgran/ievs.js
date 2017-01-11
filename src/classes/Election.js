const {indexOfMaxValue} = require('../helpers');

class Election {
  constructor(electionScenario, votingMethod) {
    this.electionScenario = electionScenario;

    this.candidates = electionScenario.generateCandidates();

    this.utilitySums = this.candidates.map((candidateUtilities) => {
      return candidateUtilities.reduce((a,b) => a + b);
    });

    this.sociallyBestWinnerId = indexOfMaxValue(this.utilitySums);

    this.bestUtility = this.utilitySums[this.sociallyBestWinnerId];

    // this.condorcetWinnerId = findCondorcetWinner();
    // function findCondorcetWinner() {
    //   // function BuildDefeatsMatrix() {/*...*/}
    //   // return id of condorcet winner or null;
    // }

    this.getWinner = (votingMethod) => {
      const results = votingMethod(this.candidates);
      return results.winner;
    };

    this.winnerId = this.getWinner(votingMethod); // winner is the candidate's id.
  }

  bayesianRegret() {
    return this.bestUtility - this.utilitySums[this.winnerId];
  }
}


module.exports = Election;
