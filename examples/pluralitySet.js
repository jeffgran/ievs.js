const ievs = require('../src');

const {
  ElectionScenario,
  ElectionSet,
  utilityGenerators,
  votingMethods
} = ievs;


const electionScenario = new ElectionScenario(5, 200, utilityGenerators.gaussianDistribution);

console.log("Election Scenario:");
console.log("Candidates:", electionScenario.numCandidates);
console.log("Voters:", electionScenario.numVoters);


const electionSet = new ElectionSet(electionScenario, votingMethods.plurality, 100);

console.log("Elections:", electionSet.numElections);
console.log("Bayesian Regret:", electionSet.bayesianRegret());
