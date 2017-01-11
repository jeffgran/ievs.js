//const {indexOfMaxValue} = require('../helpers');

function randomWinner(candidates) {
  const rand = Math.floor(Math.random() * (candidates.length - 1));
  return {
    winner: rand
  };
}


module.exports = randomWinner;
