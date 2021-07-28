const argumentsExtractor = (process) => {
	const args = process.argv.slice(2).toString();
	const data = args.replaceAll(',', '+').split('--');
	const vars = data.splice(1);
	let object = {};
	vars.map((item) => {
		object[item.split('+')[0]] = item
			.split('+')
			.splice(1)
			.toString()
			.replaceAll(',', '+');
	});
	console.log(object);
	return object;
};
export default argumentsExtractor;
