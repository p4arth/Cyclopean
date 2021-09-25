var util = require('util');
var fs = require('graceful-fs');
var deepmerge = require('deepmerge');
var WordPOS = require('wordpos');
var wordpos = new WordPOS();
var natural = require('natural');
var sentenceTokenizer = new natural.SentenceTokenizer();
var presentVerbInflector = new natural.PresentVerbInflector();
var wordnet = new natural.WordNet();
var sentencer = require('sentencer');
var txtgen = require('txtgen');
var writegood = require('write-good');
var { NlpManager } = require('node-nlp');
var nlpManager = new NlpManager({ languages: ['en'], forceNER: true });
var brain = require('brain.js');

function wordFreq(string) {
    var words = string.toString().replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
};

module.exports = {util, fs, deepmerge, wordpos, natural, sentenceTokenizer, presentVerbInflector, wordnet, sentencer, txtgen, writegood, nlpManager, brain, wordFreq};