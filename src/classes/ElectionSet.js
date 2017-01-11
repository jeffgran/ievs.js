const Election = require('./Election');

class ElectionSet {
  constructor(electionScenario, votingMethod, numElections) {
    this.electionScenario = electionScenario;
    this.votingMethod = votingMethod;
    this.numElections = numElections;
    this.elections = new Array(numElections).fill(undefined).map((u) => new Election(electionScenario, votingMethod));
  }

  bayesianRegret() {
    let MRegret = 0.0, // mean regret
        SRegret = 0.0; // what is SRegret? Standard Deviation something?

    for (let i = 1; i <= this.numElections; i++) {
      const e = this.elections[i - 1];
      const r = e.bayesianRegret();
      const oldMean = MRegret;
      MRegret += (r - oldMean)/(i);
      SRegret += (r - oldMean)*(r - MRegret);
    }

    //ScaleRealVec(NumMethods, B.SRegret, 1.0/((B.NumElections - 1.0)*B.NumElections) ); /*StdDev/sqrt(#) = StdErr.*/
    const scalefactor = 1.0/((this.numElections - 1.0)*this.numElections);
    return SRegret * scalefactor;
  }
}


module.exports = ElectionSet;
