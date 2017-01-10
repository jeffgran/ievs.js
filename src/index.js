// Software Architecture:
// I. voting methods.
// II. voting strategies.
// III. ignorance generators
// IV. utility generators
//
// Anybody can add new voting methods, new strategies, or new utility generators.
// The idea is to build a "Chinese menu" system which can investigate A*B*C*D kinds of scenarios
// BUT the effort to write it is only A+B+C+D.
//
// The information-flow-direction is  IV-->III-->II-->I-->winners-->regrets.
//
//
//
// May need to refer to this later for how IgnoranceAmplitude and HonestyStrat/Honestyfrac work
//
// function computeBR(E) {
//   UtilDispatcher(E, UtilMeth);
//   AddIgnorance(E, B.IgnoranceAmplitude);
//   HonestyStrat(E, B.Honfrac);
//   FindWinnersAndRegrets(E, VotMethods);
// }



function ElectionScenario(numCandidates, numVoters, utilityGenerator /*, ignorance generator? */ ) {
  [this.candidates, this.voters] = utilityGenerator(numCandidates, numVoters);

  this.utilitySums = [/*...*/]; // a candidate's id is their index in this (and any other?) array
  this.condorcetWinnerId = findCondorcetWinner();

  function findCondorcetWinner() {
    // function BuildDefeatsMatrix() {/*...*/}
    // return id of condorcet winner or null;
  }
}



class Election {
  constructor(electionScenario, votingMethod) {
    this.electionScenario = electionScenario;
    this.winnerId = electionScenario.getWinner(votingMethod); // winner is the candidate's id.
  }

  bayesianRegret() {

    // TODO need to investigate what exactly this is scaling and why.
    // ScaleRealVec(NumMethods, B.SRegret, 1.0/((B.NumElections - 1.0)*B.NumElections) ); /*StdDev/sqrt(#) = StdErr.*/
    return this.electionScenario.maxUtilitySum - this.electionScenario.utilitySums[this.winnerId];
  }
}


// Usage:

const electionScenario = new ElectionScenario(5, 200, randomUtilityGenerator);
const election = new Election(electionScenario, plurality);

console.log(election.bayesianRegret);
