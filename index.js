// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments) {
    var killingIt = []
    for (var i = 0; i < 4; i++) {
      killingIt[i] = `${musicians[i]} plays ${instruments[i]}`
    }
    return killingIt
}
function johnLennonFacts(facts) {
  var excitingFacts = []
  var i = 0
  while (i < 4) {
    excitingFacts[i] = `${facts[i]}!!!`;
    i++
  }
  return excitingFacts
} 
