const probabilityDistributions = require('probability-distributions');
const {indexOfMaxValue} = require('../helpers');


/* simplest possible utility generator: random numbers on a normal distribution: */
function gaussianDistribution(numCandidates, numVoters) {
  const result = new Array(numCandidates).fill(undefined);
  result.forEach((_, i) => {
    result[i] = probabilityDistributions.rnorm(numVoters);
  });
  return result;
}

function plurality(candidates) {
  const voteCounts = new Array(candidates.length).fill(0);

  for(let i = 0; i < candidates[0].length; i++) {
    const voterUtilities = candidates.map(c => c[i]);
    const favoriteCandidateId = indexOfMaxValue(voterUtilities);
    voteCounts[favoriteCandidateId]++;
  }

  return {
    voteCounts,
    winner: indexOfMaxValue(voteCounts)
  };
}


module.exports = gaussianDistribution;
