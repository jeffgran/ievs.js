const {indexOfMaxValue} = require('../helpers');


function ElectionScenario(numCandidates, numVoters, utilityGenerator /*, ignorance generator? */ ) {
  this.candidates = utilityGenerator(numCandidates, numVoters);

  this.utilitySums = this.candidates.map((candidateUtilities) => {
    return candidateUtilities.reduce((a,b) => a + b);
  });


  this.sociallyBestWinnerId = indexOfMaxValue(this.utilitySums);

  this.bestUtility = this.utilitySums[this.sociallyBestWinnerId];

  this.condorcetWinnerId = findCondorcetWinner();

  function findCondorcetWinner() {
    // function BuildDefeatsMatrix() {/*...*/}
    // return id of condorcet winner or null;
  }

  this.getWinner = (votingMethod) => {
    const results = votingMethod(this.candidates);
    return results.winner;
  };

}

module.exports = ElectionScenario;
