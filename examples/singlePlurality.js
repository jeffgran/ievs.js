const ievs = require('../src');

const {
  ElectionScenario,
  Election,
  utilityGenerators,
  votingMethods
} = ievs;

console.log(ievs);


// Usage:

const electionScenario = new ElectionScenario(5, 200, utilityGenerators.gaussianDistribution);
const election = new Election(electionScenario, votingMethods.plurality);


console.log("Candidate Utility Sums:");
electionScenario.utilitySums.map((n, i) => console.log(`${i} : ${n}`));

console.log("Socially Best Winner:", electionScenario.sociallyBestWinnerId);
console.log("Plurality Winner:", election.winnerId);
console.log("Bayesian Regret:", election.bayesianRegret());
