/**
 * 解析url中的query参数为对象
 * 
 * @param {string} search - query参数，e.g. "?key1=value1&key2=value2"
 * @returns {key1: value1, key2: value2} 
 */
export default function urlParamsParser(search: string): Record<string, string | undefined> | null {
	if (!search) {
		return null;
	}

	const s: string = decodeURIComponent(search);
	let str: string = s;
	const questionMarkIndex = s.indexOf('?');
	if (questionMarkIndex > -1) {
		str = s.slice(questionMarkIndex + 1);
	}

	const res: Record<string, string | undefined> = {};
	const pairs: string[] = str.split('&');
	for (let i = 0, len = pairs.length; i < len; i++) {
		const pair: string = pairs[i];
		const [key, value] = pair.split('=');
		res[key] = value;
	}

	return res;
}