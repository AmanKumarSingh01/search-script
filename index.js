#!/usr/bin/env node
import makeApi from './Helper/api-caller.js';
import argumentsExtractor from './Helper/argument-extractor.js';
import argumentChecker from './Helper/arguments-checker.js';

// getting the arguments form the command line
argumentChecker(process);
// processing args
const object = argumentsExtractor(process);
//checking for required things
if (object['q']) {
	const response = await makeApi(object.q);
	if (!response.Abstract == '') {
		console.log('\x1b[36m%s\x1b[0m', 'wisdom');
		console.log();
		console.log('\x1b[36m%s\x1b[0m', response.Abstract);
	}
	console.log('\x1b[36m%s\x1b[0m', response.Answer);

	console.log();
	console.log('\x1b[36m%s\x1b[0m', 'Related topic on web');
	console.log();

	response.RelatedTopics.map((results, index) => {
		if (!results.name && results.Text) {
			console.log('\x1b[31m', index, '\x1b[0m', results.Text);
			console.log();
			console.log('\x1b[36m%s\x1b[0m', results.FirstURL);
			console.log();
			console.log();
		}
	});
	//under various categories
	response.RelatedTopics.map((results, index) => {
		if (results.name) {
			console.log(results);
		}
	});
}

if (object['h'] || object['h'] === '') {
	console.log(
		"Welcome to Aman's Wisdom here you will get knowledge of everything"
	);
	console.log('usage :-');
	console.log('For search');
	console.log('search --q <what you want to search>');
	console.log('For help');
	console.log('search --h ');
}
