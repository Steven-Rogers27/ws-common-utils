/**
 * 当原始文本中含有换行符'\n'时，不能直接对整个文本做html编码，因为会把 '\n' 转成 '<br>'
 * 所以需要把 '\n' 跳过不编码
 * @param {string} 待html编码的原始字符串 
 * @returns html编码后的字符串
 */
function htmlEncodeWithLineBreak(t: string): string {
	const div: HTMLDivElement = document.createElement('div');
	const segs: string[] = t.split('\n');
	let res: string = '';
	for (let i = 0, len = segs.length; i < len; i++) {
		div.innerText = segs[i];
		res += div.innerHTML;
		if (i < len - 1) {
			res += '\n';
		}
	}
	return res;
}
/**
 * 对文本进行html编码
 * 
 * @param {string} 待html编码的原始字符串 
 * @returns html编码后的字符串
 */
export function htmlEncode(text: string): string {
	const div: HTMLDivElement = document.createElement('div');
	if (text.includes('\n')) {
		return htmlEncodeWithLineBreak(text);
	}
	div.innerText = text;

	return div.innerHTML;
}
/**
 * 对文本进行html解码
 * @param {string} 经过html编码的字符串
 * @returns html解码后的字符串
 */
export function htmlDecode(text: string): string {
	const div: HTMLDivElement = document.createElement('div');
	div.innerHTML = text;
	return div.innerText;
}
