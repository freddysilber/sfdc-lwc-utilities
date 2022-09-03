/**
 * Notes:
 * 
 * `node tools/scaffold -h host -p port -r -v -b --quiet -x -o outfile`
 * `node tools/scaffold lyr`
 * `node tools/scaffold lyr -h`
 * `node tools/scaffold lyr -y 2002`
 * https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
 * 
 * I want to scaffold a new lwc component under 'packages' and a new lwc component under 'unpackaged'
 * that corresponds to the same component so we can test and develop
 * the 'focused' component
 * 
 * Under 'unpackaged' the name would need a prefix so the dev component wont conflict with the packaged component
 */
const yargs = require('yargs');

const argv = yargs
	.command('lyr', 'Tells whether an year is leap year or not', {
		year: {
			description: 'the year to check for',
			alias: 'y',
			type: 'number'
		}
	})
	.option('time', {
		alias: 't',
		description: 'Tell the present Time',
		type: 'boolean'
	})
	.help()
	.alias('help', 'h').argv;

if (argv.time) {
	console.log('The current time is: ', new Date().toLocaleTimeString());
}

if (argv._.includes('lyr')) {
	const year = argv.year || new Date().getFullYear();
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		console.log(`${year} is a Leap Year`);
	} else {
		console.log(`${year} is NOT a Leap Year`);
	}
}

console.log(argv);