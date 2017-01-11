const Election = require('./Election');
const {randomWinner} = require('../votingMethods');

function ElectionSet(electionScenario, votingMethod, numElections) {

  this.electionScenario = electionScenario;
  this.votingMethod = votingMethod;
  this.numElections = numElections;
  this.elections = new Array(numElections).fill(undefined).map((u) => new Election(electionScenario));


  this.bayesianRegret = () => {
    return bayesianRegret(this.votingMethod);
  };

  this.randomWinnerRegret = () => {
    return bayesianRegret(randomWinner);
  };

  this.normalizedBayesianRegret = () => {
    return this.bayesianRegret()/this.randomWinnerRegret();
  };


  const bayesianRegret = (votingMethod) => {
    let MRegret = 0.0, // mean regret
        SRegret = 0.0; // what is the S in SRegret? Standard Deviation something?

    for (let i = 1; i <= this.numElections; i++) {
      const e = this.elections[i - 1];
      const r = e.bayesianRegret(votingMethod);
      const oldMean = MRegret;
      MRegret += (r - oldMean)/(i);
      //SRegret += (r - oldMean)*(r - MRegret);
    }

    //ScaleRealVec(NumMethods, B.SRegret, 1.0/((B.NumElections - 1.0)*B.NumElections) ); /*StdDev/sqrt(#) = StdErr.*/
    // const scalefactor = 1.0/((this.numElections - 1.0)*this.numElections);
    // return SRegret * scalefactor;
    return MRegret;
  };

}




module.exports = ElectionSet;
