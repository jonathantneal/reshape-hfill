// tooling
const reshape = require('reshape');
const plugin  = require('.');

// error symbols
const name = 'reshape-hfill';
const pass = '\x1b[32m\✔\x1b[0m';
const fail = '\x1b[31m\✖\x1b[0m';

// test 1
const test1 = require('./test/basic');
const test2 = require('./test/hn');

Promise.all([
	reshape({
		plugins: [
			plugin()
		]
	}).process(test1.source).then(
		tester(test1.expect)
	),
	reshape({
		plugins: [
			plugin()
		]
	}).process(test2.source).then(
		tester(test2.expect)
	)
]).then(
	()      => console.log(`${ pass } ${ name }`) || process.exit(0),
	(error) => console.log(`${ fail } ${ name }\n   ${ error }`) || process.exit(1)
);

function tester(expect) {
	return (result) => result.output() === expect ? Promise.resolve() : Promise.reject(`
	expected: ${ expect }

	resulted: ${ result.output() }`);
}
