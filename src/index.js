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


module.exports = {
  Election: require('./classes/Election'),
  ElectionScenario: require('./classes/ElectionScenario'),
  ElectionSet: require('./classes/ElectionSet'),
  utilityGenerators: require('./utilityGenerators'),
  votingMethods: require('./votingMethods')
};
