const ievs = require('../src');

const {
  ElectionScenario,
  ElectionSet,
  utilityGenerators,
  votingMethods
} = ievs;


const electionScenario = new ElectionScenario(5, 200, utilityGenerators.simpleNormalGenerator);

console.log("Election Scenario:");
console.log("Candidates:", electionScenario.numCandidates);
console.log("Voters:", electionScenario.numVoters);
console.log("Utility Generator:", electionScenario.utilityGenerator.toString());


const electionSet = new ElectionSet(electionScenario, votingMethods.plurality, 100);

console.log("Elections:", electionSet.numElections);
console.log("Voter Satisfaction Efficiency:", electionSet.voterSatisfactionEfficiency());
