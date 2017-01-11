const ievs = require('../src');

const {
  ElectionScenario,
  Election,
  utilityGenerators,
  votingMethods
} = ievs;


const electionScenario = new ElectionScenario(5, 200, utilityGenerators.gaussianDistribution);

console.log("Election Scenario:");
console.log("Candidates:", electionScenario.numCandidates);
console.log("Voters:", electionScenario.numVoters);



const election = new Election(electionScenario, votingMethods.plurality);


console.log("Candidate Utility Sums:");
election.utilitySums.map((n, i) => console.log(`${i} : ${n}`));

console.log("Socially Best Winner:", election.sociallyBestWinnerId);
console.log("Plurality Winner:", election.winnerId);
console.log("Bayesian Regret:", election.bayesianRegret());
