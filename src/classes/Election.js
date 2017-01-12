const {indexOfMaxValue} = require('../helpers');

class Election {
  constructor(electionScenario) {
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
  }


  getWinner(votingMethod) {
    const results = votingMethod(this.candidates);
    return results.winner;
  };

  bayesianRegret(votingMethod) {
    const winnerId = this.getWinner(votingMethod); // winner is the candidate's id.
    // console.log("cand sums", this.utilitySums);
    // console.log("winner id", winnerId);
    return this.bestUtility - this.utilitySums[winnerId];
  }
}


module.exports = Election;
