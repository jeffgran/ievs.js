
function ElectionScenario(numCandidates, numVoters, utilityGenerator /*, ignorance generator? */ ) {

  this.numCandidates = numCandidates;
  this.numVoters = numVoters;
  this.utilityGenerator = utilityGenerator;

  this.generateCandidates = () => {
    return this.utilityGenerator(this.numCandidates, this.numVoters);
  };
}

module.exports = ElectionScenario;
