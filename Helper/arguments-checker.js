const argumentChecker = (process) => {
	const data = process.argv.slice(2);
	//storing data
	const args = data.toString();
	//check
	if (!args.includes('--q') && !args.includes('--h')) {
		console.log(
			"Welcome to Aman's Wisdom here you will get knowledge of everything"
		);
		console.log('usage :-');
		console.log('For search');
		console.log('search --q <what you want to search>');
		console.log('For help');
		console.log('search --h ');
	}
};
export default argumentChecker;
