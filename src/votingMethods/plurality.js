const {indexOfMaxValue} = require('../helpers');

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


module.exports = plurality;
