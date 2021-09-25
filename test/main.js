var cyclopean = require('cyclopean');
var callOfCthulhu = require('./call_of_cthulhu.js').callOfCthulhu;
var cthulhuAdjFreq = cyclopean.wordFreq(callOfCthulhu);
var freqAdjectivesCthulhu = [];
var freqAdjectivesCthulhuSorted = [];

cyclopean.wordpos.getPOS(callOfCthulhu, function(result){
	for (i of result.adjectives) { // or result.nouns, result.verbs, result.adverbs, or result.rest
		if (cthulhuAdjFreq[i] >= 5) {
			freqAdjectivesCthulhu[i] = [];
			freqAdjectivesCthulhu[i].push(cthulhuAdjFreq[i]);
		};
	};
	cyclopean.sentencer.configure({
		adjectiveList: Object.keys(freqAdjectivesCthulhu) // or nounList
	});
	var adjective = cyclopean.sentencer.make("{{ adjective }}")
	console.log(adjective);
	var updatedKeys = Object.keys(freqAdjectivesCthulhu).sort(function (a, b) {
		return freqAdjectivesCthulhu[b][0] - freqAdjectivesCthulhu[a][0];
	});
	for (i of updatedKeys) {
		freqAdjectivesCthulhuSorted[i] = [];
		freqAdjectivesCthulhuSorted[i].push(cthulhuAdjFreq[i]);
	};
	cyclopean.fs.writeFile('frequent_adjectives_cthulhu.txt', cyclopean.util.inspect(freqAdjectivesCthulhuSorted));
});