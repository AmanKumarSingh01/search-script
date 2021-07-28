import axios from 'axios';

const makeApi = async (query) => {
	let data = {};
	await axios
		.get(`https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`)
		.then((res) => (data = res.data))
		.catch((e) => console.log(e));
	if (data === {}) {
		return;
	}
	return data;
};
export default makeApi;
