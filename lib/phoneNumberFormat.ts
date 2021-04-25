/**
 * 把'12345678978'形式的电话字符串以 formatStr 为分割符转成诸如 '123-4567-8978'的形式
 * @param {string} str 原始电话字符串 
 * @param {string} formatStr 分割符 
 * @returns 转换后的电话字符串
 */
export default function phoneNumberFormat(str: string, formatStr?: string) {
	if (!str) {
		return str;
	}
	formatStr = formatStr || '-';
	return str.toString().replace(/\d+/, function (n) {
		return n.replace(/(\d)(?=(\d{4})+$)/g, function ($1) {
			return $1 + formatStr;
		});
	});
}