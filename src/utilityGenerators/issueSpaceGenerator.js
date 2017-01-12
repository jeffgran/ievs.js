const probabilityDistributions = require('probability-distributions');

function createIssueSpaceGenerator(numIssues, Lp) {
  function issueSpaceGenerator(numCandidates, numVoters) {

    const result = new Array(numCandidates).fill(undefined);

    const candidateIssueVectors = new Array(numCandidates).fill(undefined);
    candidateIssueVectors.forEach((_, i) => {
      candidateIssueVectors[i] = probabilityDistributions.rnorm(numIssues);
    });

    const voterIssueVectors = new Array(numVoters).fill(undefined);
    voterIssueVectors.forEach((_, i) => {
      voterIssueVectors[i] = probabilityDistributions.rnorm(numIssues);
    });

    // what is KK and why is it (0.6 * numIssues) ?
    const KK = 0.6 * numIssues;


    for (let c = 0; c < numCandidates; c++) {
      result[c] = new Array(numVoters);
      for (let v = 0; v < numVoters; v++) {
        result[c][v] = 1.0 / Math.sqrt(KK + LpDistanceSquared(voterIssueVectors[v], candidateIssueVectors[c], Lp));
      }
    }

    //console.log(result);

    return result;
  };

  issueSpaceGenerator.toString = () => {
    return `issueSpacegenerator (${numIssues} Issues, Lp=${Lp})`;
  };

  return issueSpaceGenerator;
}

module.exports = createIssueSpaceGenerator;




function LpDistanceSquared(vectorA, vectorB, Lp) {
  if (Lp == 1) {
    return Math.pow(L1Distance(vectorA, vectorB), 2);
  } else if (Lp == 2) {
    return DistanceSquared(vectorA, vectorB);
  } else {
    let d = 0;
    for(let i = 0; i < vectorA.length; i++) {
      d += Math.pow(Math.abs(vectorA[i] - vectorB[i]), Lp);
    }
    return Math.pow(d, 2.0/Lp);
  }
}

function L1Distance(vectorA, vectorB) {
  let d = 0;
  for(let i = 0; i < vectorA.length; i++) {d += Math.abs(vectorA[i] - vectorB[i]);}
  return d;
}

function DistanceSquared(vectorA, vectorB) {
  let d = 0;
  for(let i = 0; i < vectorA.length; i++) {d += Math.pow(vectorA[i] - vectorB[i], 2);}
  return d;
}
