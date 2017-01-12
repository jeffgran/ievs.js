const probabilityDistributions = require('probability-distributions');

/* simplest possible utility generator: random numbers on a normal distribution: */
function simpleNormalGenerator(numCandidates, numVoters) {
  const result = new Array(numCandidates).fill(undefined);
  result.forEach((_, i) => {
    result[i] = probabilityDistributions.rnorm(numVoters);
  });
  return result;
}

simpleNormalGenerator.toString = () => {
  return "simpleNormalGenerator";
};


module.exports = simpleNormalGenerator;
